# 简 Jian AI

Your personal AI assistant - always listening, even when screen is off.

## Features
- Voice control with "Hey Jian" wake word
- Cross-platform: Windows, Mac, Linux, Android, iOS
- Local AI (privacy-first) using Ollama
- Device control: open apps, system settings, media
- Works offline

## Quick Start

1. Install Ollama: https://ollama.com
2. Run: `ollama pull llama3.2`
3. Start server: `python jian-core/server/main.py`
4. Start client: `cd jian-clients/desktop && npm start`

## Download

Download latest release from GitHub Releases page (auto-built by GitHub Actions).

## Building

Run `./build.sh all` to build all platforms, or use GitHub Actions for automated builds.
