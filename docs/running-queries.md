---
sidebar_position: 4
title: Running Queries
---

# Running Queries

Serverly includes a built-in query runner so you can work with your database without leaving the app.

## Opening the query runner

From a server's detail view, tap **Query**. The query runner opens with a text editor at the top and results below.

## Writing and running a query

Type your SQL in the editor, then tap **Run** (or the play button). Results appear in a table below.

Example:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE
);

INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

SELECT * FROM users;
```

## Query history

Previously run queries are saved in the history list. Tap any entry to reload it into the editor.

## Supported SQL

The query runner supports the full SQLite SQL dialect, which includes:

- `CREATE`, `DROP`, `ALTER TABLE`
- `INSERT`, `UPDATE`, `DELETE`
- `SELECT` with `JOIN`, `GROUP BY`, `ORDER BY`, `LIMIT`
- Transactions: `BEGIN`, `COMMIT`, `ROLLBACK`
- Pragmas: `PRAGMA table_info(...)`, `PRAGMA foreign_keys = ON`, etc.

:::note
Serverly uses SQLite as its backend. Some MySQL-specific syntax (like certain `SHOW` commands or MySQL-specific functions) may not be supported in the in-app query runner. Clients connecting over the MySQL wire protocol have similar constraints.
:::
