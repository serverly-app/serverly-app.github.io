---
sidebar_position: 5
title: Import & Export
---

# Import & Export

Serverly lets you move data in and out of your servers using standard SQL dump files.

## Exporting a database

1. Open the server detail view
2. Tap **Export**
3. Choose a location using the iOS share sheet — save to Files, AirDrop to your Mac, send via Messages, etc.

The export produces a `.sql` file containing `CREATE TABLE` and `INSERT` statements compatible with MySQL and SQLite clients.

## Importing a database

1. Open the server detail view
2. Tap **Import**
3. Pick a `.sql` file from Files or another location
4. Serverly runs the SQL statements and shows progress

:::caution
Importing replaces or appends data depending on the SQL in your file. Back up your server before importing if you want to preserve the current state.
:::

## Tips

- To move a database from your Mac to your iPhone: export from MySQL/SQLite on your Mac, then import via Files or AirDrop
- Large imports run as a background task — you can leave the app and return when it's done
- The export format is plain SQL text, so you can inspect or edit it before importing elsewhere
