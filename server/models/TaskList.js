const { Schema, model } = require('mongoose');

const taskListSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const TaskList = model('TaskList', taskListSchema);

module.exports = TaskList;