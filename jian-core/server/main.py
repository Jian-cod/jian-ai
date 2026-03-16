#!/usr/bin/env python3
import asyncio
import json
import logging
import sqlite3
import websockets
from datetime import datetime

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("jian")

class JianCore:
    def __init__(self):
        self.db = sqlite3.connect("jian.db")
        self.db.execute("CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, role TEXT, content TEXT)")
        
    async def handle_websocket(self, websocket, path):
        async for message in websocket:
            data = json.loads(message)
            if data.get("type") == "text_command":
                response = f"Jian received: {data.get('text')}"
                await websocket.send(json.dumps({"type": "response", "text": response}))

async def main():
    jian = JianCore()
    server = await websockets.serve(jian.handle_websocket, "localhost", 8765)
    logger.info("🌐 Jian server started on ws://localhost:8765")
    await server.wait_closed()

if __name__ == "__main__":
    asyncio.run(main())
