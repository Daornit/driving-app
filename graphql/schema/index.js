const { gql } = require('apollo-server-express');

module.exports = gql`
  type User {
    _id: ID!
    username: String!
    avatar: String!
    email: String!
    type: String!
    isBanned: Boolean!
    hash: String
    salt: String
  }

  input UserInput {
    username: String!
    avatar: String
    email: String!
    type: String!
    password: String!
  }

  input UpdateUserInput {
    username: String
    avatar: String
    email: String
    type: String
    password: String
  }

  type AuthData {
    _id: ID!
    exp: Int!
    email: String!
    token: String!
  }

  type Query {
    me: User!
    users: [User!]!
  }

  type Mutation {
    login(email: String!, password: String!): AuthData!
    createUser(userInput: UserInput!): User!
    updateUser(userId: String!, updateUserInput: UpdateUserInput!): User!
    banUser(userId: String!): User!
  }
`;
