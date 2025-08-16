const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controller/taskController");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("view"));

app.get("/tasks", taskController.getTasks);
app.post("/tasks", taskController.addTask);
app.put("/tasks/:id", taskController.updateTask);
app.delete("/tasks/:id", taskController.deleteTask);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
