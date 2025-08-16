const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./tasks.db", (err) => {
  if (err) console.error("Database error:", err.message);
  else console.log("Connected to SQLite database");
});

db.run(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  completed INTEGER DEFAULT 0
)`);

module.exports = db;
