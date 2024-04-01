const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
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
    addUser(email:String!, username:String!, password:String!): Auth
    login(email:String!, password:String!): Auth
  }

  type Mutation {
    addTask(title: String!, description: String!, status: String!, priority: String!): Task
  }
`;

module.exports = typeDefs;
