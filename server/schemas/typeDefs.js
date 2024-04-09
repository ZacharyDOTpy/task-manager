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
    taskAuthor: User
    dueDate: String
    userId: ID
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
    dueDate: String!
    userId: ID!
  }

  input UpdateTaskInput {
    title: String
    description: String
    status: String
    priority: String
    dueDate: String
    userId: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    task(id: ID!): Task
    me: User
    tasks: [Task]

  }

  type Mutation {
    addUser(input: AddUserInput!): Auth
    addTask(
      title: String!, 
      description: String!, 
      status: String!, 
      priority:String!, 
      dueDate: String
    ): User
    updateTask(id: ID!, input: UpdateTaskInput!): Task
    login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
