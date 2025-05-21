from telethon import TelegramClient
import re
import json
from datetime import datetime

# === YOUR API CREDENTIALS ===
api_id = 27524785
api_hash = '7c0450aa39b0986faf344104a609811f'

# === CHANNEL TO SCRAPE ===
channel_username = 'armycat1'

# === OUTPUT LIST ===
parsed_entries = []

# === PARSING FUNCTION ===
def parse_message(msg_text):
    entries = []
    if "All Sectors Clear" in msg_text:
        match = re.search(r'\((\d{4})-(\d{4})\)', msg_text)
        if match:
            start, end = match.groups()
            entries.append({
                "status": "inactive",
                "sectors": ["all"],
                "start_time": f"{start}H",
                "end_time": f"{end}H"
            })
    elif "CAT 1" in msg_text:
        blocks = re.findall(r'\((\d{4})-(\d{4})\)\s*([\w, ]+)', msg_text)
        for start, end, sector_str in blocks:
            sectors = [s.strip() for s in sector_str.split(',')]
            entries.append({
                "status": "active",
                "sectors": sectors,
                "start_time": f"{start}H",
                "end_time": f"{end}H"
            })
    return entries

# === MAIN SCRAPER ===
async def main():
    global parsed_entries
    client = TelegramClient('cat1_session', api_id, api_hash)
    await client.start()

    async for message in client.iter_messages(channel_username, limit=50):
        if message.text and "[CAT Status Update]" in message.text:
            parsed = parse_message(message.text)
            # Add message ID to each entry for linking
            for entry in parsed:
                entry["message_id"] = message.id
            parsed_entries.extend(parsed)

    # Save to JSON
    with open("cat1_status.json", "w") as f:
        json.dump(parsed_entries, f, indent=2)

    print("✅ Done. Saved to cat1_status.json")

# === RUN ===
import asyncio
asyncio.run(main())
