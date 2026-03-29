---
sidebar_position: 1
title: Introduction
---

# Serverly

**Serverly** is a native iOS app that runs a MySQL-compatible SQL database server directly on your iPhone or iPad, accessible to any device on your local network.

No cloud. No Docker. No configuration files. Just open the app and tap **Run**.

---

## Who is it for?

Serverly is built for developers who want a real SQL database nearby — for local testing, demos, rapid prototyping, or learning SQL without spinning up cloud infrastructure.

If you've ever wanted to `mysql -h your-iphone.local` from your laptop, this is the app for you.

---

## How it works

1. **Create a server** — give it a name, choose SQLite as the backend
2. **Start it** — the app binds a MySQL-compatible server to a local port
3. **Connect** — point any MySQL client at your device's IP and the displayed port
4. **Build** — create tables, run queries, export data — all from your client tool or from within the app

The server runs while the app is active. When you background or close the app, the server stops.

---

## Key capabilities

| Feature | Detail |
|---|---|
| **Wire protocol** | MySQL 5.7-compatible |
| **Backend** | SQLite |
| **Network** | Local network only (Wi-Fi) |
| **Port** | Configurable, default 3306 |
| **Authentication** | Username/password |
| **Platforms** | iPhone, iPad |

---

## Quick start

```bash
# Assuming your iPhone is at 192.168.1.5 and Serverly is running
mysql -h 192.168.1.5 -P 3306 -u root

# Or with a password if you've set one
mysql -h 192.168.1.5 -P 3306 -u root -p
```

Any MySQL-compatible client works: `mysql` CLI, [TablePlus](https://tableplus.com), [DBeaver](https://dbeaver.io), [Sequel Ace](https://sequel-ace.com), and others.

---

## Next steps

- [Connecting a client](./connecting-a-client) — step-by-step for common tools
- [Managing servers](./managing-servers) — create, configure, start, stop
- [Running queries](./running-queries) — the built-in query runner
- [Import & Export](./import-export) — move data in and out
