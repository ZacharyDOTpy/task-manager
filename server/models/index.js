const User = require("./User");
const Task = require("./Task");
const TaskList = require("./TaskList");

User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
});

TaskList.hasMany(Task, {
  foreignKey: "task_list_id",
  onDelete: "CASCADE",
});

Task.belongsTo(TaskList, {
  foreignKey: "task_list_id",
});

TaskList.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(TaskList, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Task, TaskList };

