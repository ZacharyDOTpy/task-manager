const { GraphQLError } = require('graphql');
const { User, Task, TaskList } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new GraphQLError('You need to be logged in!');
    },
    tasks: async () => {
      return Task.find();
    },
    task: async (_, { id }) => {
      return Task.findById(id);
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addTask: (_, { input }) => {
      const newTask = new Task(input);
      return newTask.save();
    },
    updateTask: (_, { id, input }) => {
      const updatedTask = Task.findByIdAndUpdate(id, input, { new: true });
      return updatedTask;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new GraphQLError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new GraphQLError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
