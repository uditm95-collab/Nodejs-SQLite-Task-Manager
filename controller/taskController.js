const Task = require("../model/taskModel");

exports.getTasks = (req, res) => {
  Task.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  Task.create(title, (err, task) => {
    if (err) return res.status(500).send(err.message);
    res.json(task);
  });
};

exports.updateTask = (req, res) => {
  const { completed } = req.body;
  Task.update(req.params.id, completed, (err, task) => {
    if (err) return res.status(500).send(err.message);
    res.json(task);
  });
};

exports.deleteTask = (req, res) => {
  Task.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.json({ message: "Task deleted" });
  });
};
