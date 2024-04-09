const { GraphQLError } = require("graphql");
const { User, Task, TaskList } = require("../models");
const { signToken } = require("../utils/auth");
const { find, findOne } = require("../models/Task");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("tasks");
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id }).populate("tasks");
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("tasks");
      }
      throw new GraphQLError("You need to be logged in!");
    },
    task: async (_, { id }) => {
      return Task.findById(id);
    },
    tasks: async () => {
      return Task.find();
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      console.log("args", args);
      const user = await User.create({ ...args.input });
      const token = signToken(user);
      return { token, user };
    },
    addTask: async (_, args, context) => {
      const task = await Task.create(args);

      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          // { $addToSet: { tasks: [{_id: task._id, title: task.title}]} },
          { $addToSet: { tasks: task._id } },
          { new: true }
        ).populate("tasks");
        return user;
      }

      return new GraphQLError("You are not authorized to perform this action.");

      //input.userId
      //findoneandupdate User{
      //  $push: {tasks: task._id}
      //add to set
      // }
      //return task
    },
    updateTask: async (_, { id, input }) => {
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true }
      );

      return updatedTask;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
