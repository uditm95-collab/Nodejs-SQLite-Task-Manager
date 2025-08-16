const db = require("../db");

class Task {
  static getAll(callback) {
    db.all("SELECT * FROM tasks", [], callback);
  }

  static create(title, callback) {
    db.run("INSERT INTO tasks (title) VALUES (?)", [title], function (err) {
      callback(err, { id: this.lastID, title, completed: 0 });
    });
  }

  static update(id, completed, callback) {
    db.run("UPDATE tasks SET completed = ? WHERE id = ?", [completed, id], function (err) {
      callback(err, { id, completed });
    });
  }

  static delete(id, callback) {
    db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
      callback(err);
    });
  }
}

module.exports = Task;
