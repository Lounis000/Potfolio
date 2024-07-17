// backend/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./feedbacks.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS feedbacks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      comment TEXT NOT NULL,
      rating INTEGER NOT NULL
    )
  `);
});

module.exports = db;
