---
sidebar_position: 3
title: Managing Servers
---

# Managing Servers

## Creating a server

Tap **+** on the main screen. Give your server a name and confirm. Serverly creates an isolated SQLite database for it in the iOS sandbox.

Each server gets:
- Its own database file
- Its own port (auto-assigned, or you can choose one)
- Its own connection credentials

## Starting and stopping

Tap a server card to open its detail view, then tap **Run** to start it or **Stop** to stop it.

The server is available on your local network as long as:
- The app is in the foreground
- The server is in the Running state

## Configuring a server

From the server detail view you can set:
- **Port** — the TCP port to listen on (default: 3306)
- **Username / Password** — connection credentials

## Multiple servers

You can create multiple servers. Only one server per port can run at a time — Serverly will alert you if there's a port conflict.

## Deleting a server

Swipe left on a server card and tap **Delete**. This permanently removes the server and all its data. This action cannot be undone.

## Data storage

All data is stored in your iOS app sandbox at:

```
<Documents>/mysql-data/<server-uuid>/
```

Data is included in device backups (iCloud or iTunes) if you have backups enabled.
