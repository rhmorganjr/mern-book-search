const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Book {
    _id: ID
    bookId: String
    description: String
    image: String
    link: String
    title: String
    authors: []
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [bookSchema]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    books(query: String): [bookSchema]
    book(_id: ID!): bookSchema
    user: User
  }

`;

module.exports = typeDefs;
