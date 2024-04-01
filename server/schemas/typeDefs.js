const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    tasks: [Task]
    password: String
  }

  type Task {
    _id: ID
    title: String
    description: String
    status: String
    priority: String
    user: User
  }

  input AddUserInput {
    email: String!
    username: String!
    password: String!
  }

  input AddTaskInput {
    title: String!
    description: String!
    status: String!
    priority: String!
  }

  input UpdateTaskInput {
    title: String
    description: String
    status: String
    priority: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    tasks: [Task]
    task(id: ID!): Task
    me: User
  }

  type Mutation {
    addUser(input: AddUserInput!): Auth
    addTask(input: AddTaskInput!): Task
    updateTask(id: ID!, input: UpdateTaskInput!): Task
    login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
