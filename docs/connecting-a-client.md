---
sidebar_position: 2
title: Connecting a Client
---

# Connecting a Client

Serverly speaks the MySQL wire protocol, so any standard MySQL client works out of the box.

## Before you connect

1. Open Serverly on your iPhone or iPad
2. Start a server — tap the server card, then tap **Run**
3. Note the **IP address** and **port** displayed in the app
4. Make sure your computer and device are on the **same Wi-Fi network**

## mysql CLI

```bash
mysql -h <device-ip> -P <port> -u root
```

Example:
```bash
mysql -h 192.168.1.5 -P 3306 -u root
```

## TablePlus

1. Click **+** to add a new connection
2. Choose **MySQL**
3. Fill in:
   - **Host:** your device's IP
   - **Port:** as shown in Serverly
   - **User:** `root`
   - **Password:** your server password (if set)
4. Click **Test** → **Connect**

## DBeaver

1. **Database** → **New Database Connection** → **MySQL**
2. Set the host, port, username, and password
3. Click **Test Connection** → **Finish**

## Sequel Ace

1. Choose **TCP/IP** connection type
2. Enter the host, port, username, and password
3. Click **Connect**

## Finding your device IP

In Serverly, the server card shows the connection string when a server is running. You can also find your IP in **Settings → Wi-Fi → your network → IP Address** on your iPhone.

## Troubleshooting

**Can't connect:**
- Verify both devices are on the same Wi-Fi network
- Check the IP and port match what Serverly shows
- Make sure the server is in the **Running** state in Serverly
- Some enterprise or guest Wi-Fi networks block local device connections — use a personal hotspot instead
