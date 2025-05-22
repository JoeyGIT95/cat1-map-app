import React, { useState, useEffect } from "react";
import baseMap from "./assets/base-map.png";


function timeToMinutes(t) {
  const clean = t.replace("H", "");
  const hh = parseInt(clean.slice(0, 2), 10);
  const mm = parseInt(clean.slice(2, 4), 10);
  return hh * 60 + mm;
}
//test
// Get the latest active/inactive message for current time
function getActiveCat1Message(messages) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  // Filter messages valid for current time
  const validMessages = messages.filter((msg) => {
    const start = timeToMinutes(msg.start_time);
    const end = timeToMinutes(msg.end_time);
    return nowMinutes >= start && nowMinutes < end;
  });

  if (validMessages.length === 0) return null;

  // Pick message with highest message_id (latest)
  return validMessages.reduce((latest, msg) =>
    msg.message_id > latest.message_id ? msg : latest
  );
}

// Auto-import all SVGs
const sectorSvgs = import.meta.glob("./assets/sectors/*.svg", {
  as: "url",
  eager: true,
});

const VIEWPORT_WIDTH = 1200;
const VIEWPORT_HEIGHT = 800;
const BASEMAP_WIDTH = 4400;
const BASEMAP_HEIGHT = 3400;
const BASEMAP_OFFSET_X = 2960;
const BASEMAP_OFFSET_Y = 2160;

const scale = Math.min(VIEWPORT_WIDTH / BASEMAP_WIDTH, VIEWPORT_HEIGHT / BASEMAP_HEIGHT);
const scaledWidth = BASEMAP_WIDTH * scale;
const scaledHeight = BASEMAP_HEIGHT * scale;

const rawSectors = [
  ["2", -2147, -946, 280, 385],
  ["5", -1973, -1319, 488, 616],
  ["4", -2160, -1697, 631, 419],
  ["7", -1620, -1089, 518, 510],
  ["6", -1686, -1630, 429, 634],
  ["10N", -1322, -1817, 656, 528],
  ["10S", -1278, -1402, 451, 310],
  ["13N", -1256, -1211, 470, 387],
  ["11E", -725, -1498, 569, 431],
  ["16N", -274, -1415, 510, 449],
  ["16S", -427, -1182, 688, 709],
  ["15", -463, -660, 981, 625],
  ["17", -16, -1436, 760, 320],
  ["18W", 76, -1181, 620, 629],
  ["18E", 324, -1179, 912, 1094],
  ["13S", -1195, -1012, 522, 483],
  ["14", -1439, -733, 1094, 1013],
  ["12", -786, -1179, 510, 632],
  ["11W", -884, -1778, 575, 795],
  ["3N", -2052, -1386, 171, 210],
  ["L4", -2239, -1404, 271, 229],
  ["3S", -2090, -1196, 189, 285],
  ["L3", -2342, -1262, 323, 263],
  ["L2", -2427, -1050, 366, 310],
  ["L1", -2494, -878, 390, 379],
  ["1N", -2741, -742, 658, 629],
  ["8N", -2096, -781, 884, 559],
  ["1S", -2750, -115, 647, 661],
  ["8S", -2393, -315, 1077, 861],
  ["9", -2103, 202, 1165, 721],
  ["19N", -381, 170, 712, 430],
  ["19S", -348, 476, 694, 360],
];

const sectorsData = rawSectors.reduce((acc, [name, x, y, width, height]) => {
  const key = `Sector ${name}`;
  const filename = `./assets/sectors/${name}.svg`;
  acc[key] = {
    svg: sectorSvgs[filename],
    x: x + BASEMAP_OFFSET_X,
    y: y + BASEMAP_OFFSET_Y,
    width,
    height,
  };
  return acc;
}, {});

export default function App() {
  const [highlightedZone, setHighlightedZone] = useState(null);
  const [clickedZone, setClickedZone] = useState(null);
  const [cat1Data, setCat1Data] = useState(null);
  const [latestMessageId, setLatestMessageId] = useState(null);
  const [activeSectors, setActiveSectors] = useState([]);


  useEffect(() => {
  fetch("/api/proxy")
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch proxy");
      return res.json();
    })
    .then((data) => {
      console.log("✅ Received data from proxy:", data);
      setCat1Data(data);

      if (data.length > 0) {
        const latest = getActiveCat1Message(data);
        if (latest) {
          setLatestMessageId(latest.message_id);
          const sectors = (latest.sectors || []).map((s) => `Sector ${s}`);
          console.log("🔥 Active sectors:", sectors);
          setActiveSectors(sectors);
        }
      }
    })
    .catch((err) => {
      console.error("❌ Failed to load cat1_status.json", err);
    });
}, []);





  const renderInfoBox = () => {
    if (!clickedZone) return null;

    const sector = sectorsData[clickedZone];
    if (!sector) return null;

    const left = sector.x * scale;
    const top = sector.y * scale;
    const width = sector.width * scale;
    const height = sector.height * scale;

    const boxWidth = 180;
    const boxHeight = 60;

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    let clampedLeft = centerX - boxWidth / 2;
    let clampedTop = centerY - boxHeight / 2;

    clampedLeft = Math.max(0, Math.min(clampedLeft, scaledWidth - boxWidth));
    clampedTop = Math.max(0, Math.min(clampedTop, scaledHeight - boxHeight));

    const infoBoxStyle = {
      position: "absolute",
      left: clampedLeft,
      top: clampedTop,
      width: boxWidth,
      height: boxHeight,
      background: "rgba(0, 0, 0, 0.6)",
      color: "white",
      borderRadius: 6,
      fontSize: 14,
      fontWeight: "600",
      padding: "8px",
      userSelect: "none",
      zIndex: 1000,
      pointerEvents: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    };

    return <div style={infoBoxStyle}>{clickedZone}</div>;
  };
  	return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    }}
  >
    <div
      style={{
        position: "relative",
        width: scaledWidth,
        height: scaledHeight,
      }}
    >
      {/* Map container */}
      <div
        className="map-container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          border: "1px solid #ccc",
          backgroundColor: "white",
        }}
      >
        <img
          src={baseMap}
          alt="Base Map"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
          }}
        />

        {Object.entries(sectorsData).map(([sectorName, data]) => (
          <img
            key={sectorName}
            src={data.svg}
            alt={sectorName}
            title={sectorName}
            onMouseEnter={() => setHighlightedZone(sectorName)}
            onMouseLeave={() => setHighlightedZone(null)}
            onClick={() => setClickedZone(sectorName)}
            style={{
              position: "absolute",
              left: data.x * scale,
              top: data.y * scale,
              width: data.width * scale,
              height: data.height * scale,
              filter:
  				activeSectors.includes(sectorName)
				    ? "drop-shadow(0 0 10px red)"
				    : highlightedZone === sectorName
				    ? "drop-shadow(0 0 10px #00008B)"
				    : "none",
              transition: "filter 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}

        {renderInfoBox()}

        {latestMessageId && (
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              padding: "8px 12px",
              backgroundColor: "#f4f4f4",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#333",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              zIndex: 999,
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            Latest Message ID: {latestMessageId}
          </div>
        )}
      </div>
    </div>
  </div>
);
}