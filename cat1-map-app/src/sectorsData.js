import sector2 from "./assets/sectors/2.svg?url";
import sector5 from "./assets/sectors/5.svg?url";
import sector4 from "./assets/sectors/4.svg?url";
import sector7 from "./assets/sectors/7.svg?url";
import sector6 from "./assets/sectors/6.svg?url";
import sector10N from "./assets/sectors/10N.svg?url";
import sector10S from "./assets/sectors/10S.svg?url";
import sector13N from "./assets/sectors/13N.svg?url";
import sector11E from "./assets/sectors/11E.svg?url";
import sector16N from "./assets/sectors/16N.svg?url";
import sector16S from "./assets/sectors/16S.svg?url";
import sector15 from "./assets/sectors/15.svg?url";
import sector17 from "./assets/sectors/17.svg?url";
import sector18W from "./assets/sectors/18W.svg?url";
import sector18E from "./assets/sectors/18E.svg?url";
import sector13S from "./assets/sectors/13S.svg?url";
import sector14 from "./assets/sectors/14.svg?url";
import sector12 from "./assets/sectors/12.svg?url";
import sector11W from "./assets/sectors/11W.svg?url";
import sector3N from "./assets/sectors/3N.svg?url";
import sectorL4 from "./assets/sectors/L4.svg?url";
import sector3S from "./assets/sectors/3S.svg?url";
import sectorL3 from "./assets/sectors/L3.svg?url";
import sectorL2 from "./assets/sectors/L2.svg?url";
import sectorL1 from "./assets/sectors/L1.svg?url";
import sector1N from "./assets/sectors/1N.svg?url";
import sector8N from "./assets/sectors/8N.svg?url";
import sector1S from "./assets/sectors/1S.svg?url";
import sector8S from "./assets/sectors/8S.svg?url";
import sector9 from "./assets/sectors/9.svg?url";
import sector19N from "./assets/sectors/19N.svg?url";
import sector19S from "./assets/sectors/19S.svg?url";

const BASEMAP_OFFSET_X = 2960;
const BASEMAP_OFFSET_Y = 2160;

const sectorsData = {
  "Sector 2": {
    svg: sector2,
    x: -2147 + BASEMAP_OFFSET_X,
    y: -946 + BASEMAP_OFFSET_Y,
    width: 280,
    height: 385,
    status: "",
  },
  "Sector 5": {
    svg: sector5,
    x: -1973 + BASEMAP_OFFSET_X,
    y: -1319 + BASEMAP_OFFSET_Y,
    width: 488,
    height: 616,
    status: "",
  },
  "Sector 4": {
    svg: sector4,
    x: -2160 + BASEMAP_OFFSET_X,
    y: -1697 + BASEMAP_OFFSET_Y,
    width: 631,
    height: 419,
    status: "",
  },
  "Sector 7": {
    svg: sector7,
    x: -1620 + BASEMAP_OFFSET_X,
    y: -1089 + BASEMAP_OFFSET_Y,
    width: 518,
    height: 510,
    status: "",
  },
  "Sector 6": {
    svg: sector6,
    x: -1686 + BASEMAP_OFFSET_X,
    y: -1630 + BASEMAP_OFFSET_Y,
    width: 429,
    height: 634,
    status: "",
  },
  "Sector 10N": {
    svg: sector10N,
    x: -1322 + BASEMAP_OFFSET_X,
    y: -1817 + BASEMAP_OFFSET_Y,
    width: 656,
    height: 528,
    status: "",
  },
  "Sector 10S": {
    svg: sector10S,
    x: -1278 + BASEMAP_OFFSET_X,
    y: -1402 + BASEMAP_OFFSET_Y,
    width: 451,
    height: 310,
    status: "",
  },
  "Sector 13N": {
    svg: sector13N,
    x: -1256 + BASEMAP_OFFSET_X,
    y: -1211 + BASEMAP_OFFSET_Y,
    width: 470,
    height: 387,
    status: "",
  },
  "Sector 11E": {
    svg: sector11E,
    x: -725 + BASEMAP_OFFSET_X,
    y: -1498 + BASEMAP_OFFSET_Y,
    width: 569,
    height: 431,
    status: "",
  },
  "Sector 16N": {
    svg: sector16N,
    x: -274 + BASEMAP_OFFSET_X,
    y: -1415 + BASEMAP_OFFSET_Y,
    width: 510,
    height: 449,
    status: "",
  },
  "Sector 16S": {
    svg: sector16S,
    x: -427 + BASEMAP_OFFSET_X,
    y: -1182 + BASEMAP_OFFSET_Y,
    width: 688,
    height: 709,
    status: "",
  },
  "Sector 15": {
    svg: sector15,
    x: -463 + BASEMAP_OFFSET_X,
    y: -660 + BASEMAP_OFFSET_Y,
    width: 981,
    height: 625,
    status: "",
  },
  "Sector 17": {
    svg: sector17,
    x: -16 + BASEMAP_OFFSET_X,
    y: -1436 + BASEMAP_OFFSET_Y,
    width: 760,
    height: 320,
    status: "",
  },
  "Sector 18W": {
    svg: sector18W,
    x: 76 + BASEMAP_OFFSET_X,
    y: -1181 + BASEMAP_OFFSET_Y,
    width: 620,
    height: 629,
    status: "",
  },
  "Sector 18E": {
    svg: sector18E,
    x: 324 + BASEMAP_OFFSET_X,
    y: -1179 + BASEMAP_OFFSET_Y,
    width: 912,
    height: 1094,
    status: "",
  },
  "Sector 13S": {
    svg: sector13S,
    x: -1195 + BASEMAP_OFFSET_X,
    y: -1012 + BASEMAP_OFFSET_Y,
    width: 522,
    height: 483,
    status: "",
  },
  "Sector 14": {
    svg: sector14,
    x: -1439 + BASEMAP_OFFSET_X,
    y: -733 + BASEMAP_OFFSET_Y,
    width: 1094,
    height: 1013,
    status: "",
  },
  "Sector 12": {
    svg: sector12,
    x: -786 + BASEMAP_OFFSET_X,
    y: -1179 + BASEMAP_OFFSET_Y,
    width: 510,
    height: 632,
    status: "",
  },
  "Sector 11W": {
    svg: sector11W,
    x: -884 + BASEMAP_OFFSET_X,
    y: -1778 + BASEMAP_OFFSET_Y,
    width: 575,
    height: 795,
    status: "",
  },
  "Sector 3N": {
    svg: sector3N,
    x: -2052 + BASEMAP_OFFSET_X,
    y: -1386 + BASEMAP_OFFSET_Y,
    width: 171,
    height: 210,
    status: "",
  },
  "Sector L4": {
    svg: sectorL4,
    x: -2239 + BASEMAP_OFFSET_X,
    y: -1404 + BASEMAP_OFFSET_Y,
    width: 271,
    height: 229,
    status: "",
  },
  "Sector 3S": {
    svg: sector3S,
    x: -2090 + BASEMAP_OFFSET_X,
    y: -1196 + BASEMAP_OFFSET_Y,
    width: 189,
    height: 285,
    status: "",
  },
  "Sector L3": {
    svg: sectorL3,
    x: -2342 + BASEMAP_OFFSET_X,
    y: -1262 + BASEMAP_OFFSET_Y,
    width: 323,
    height: 263,
    status: "",
  },
  "Sector L2": {
    svg: sectorL2,
    x: -2427 + BASEMAP_OFFSET_X,
    y: -1050 + BASEMAP_OFFSET_Y,
    width: 366,
    height: 310,
    status: "",
  },
  "Sector L1": {
    svg: sectorL1,
    x: -2494 + BASEMAP_OFFSET_X,
    y: -878 + BASEMAP_OFFSET_Y,
    width: 390,
    height: 379,
    status: "",
  },
  "Sector 1N": {
    svg: sector1N,
    x: -2741 + BASEMAP_OFFSET_X,
    y: -742 + BASEMAP_OFFSET_Y,
    width: 658,
    height: 629,
    status: "",
  },
  "Sector 8N": {
    svg: sector8N,
    x: -2096 + BASEMAP_OFFSET_X,
    y: -781 + BASEMAP_OFFSET_Y,
    width: 884,
    height: 559,
    status: "",
  },
  "Sector 1S": {
    svg: sector1S,
    x: -2750 + BASEMAP_OFFSET_X,
    y: -115 + BASEMAP_OFFSET_Y,
    width: 647,
    height: 661,
    status: "",
  },
  "Sector 8S": {
  svg: sector8S,
  x: -2393 + BASEMAP_OFFSET_X,
  y: -315 + BASEMAP_OFFSET_Y,
  width: 1077,
  height: 861,
  status: "",
},
"Sector 9": {
  svg: sector9,
  x: -2103 + BASEMAP_OFFSET_X,
  y: 202 + BASEMAP_OFFSET_Y,
  width: 1165,
  height: 721,
  status: "",
},
"Sector 19N": {
  svg: sector19N,
  x: -381 + BASEMAP_OFFSET_X,
  y: 170 + BASEMAP_OFFSET_Y,
  width: 712,
  height: 430,
  status: "",
},
"Sector 19S": {
  svg: sector19S,
  x: -348 + BASEMAP_OFFSET_X,
  y: 476 + BASEMAP_OFFSET_Y,
  width: 694,
  height: 360,
  status: "",
},

};


export default sectorsData;