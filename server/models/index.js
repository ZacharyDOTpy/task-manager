const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,

});

const TaskSchema = new mongoose.Schema({
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  taskList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TaskList'
  }
});

const TaskListSchema = new mongoose.Schema({
  name: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const User = mongoose.model("User", UserSchema);
const Task = mongoose.model("Task", TaskSchema);
const TaskList = mongoose.model("TaskList", TaskListSchema);

module.exports = { User, Task, TaskList };
