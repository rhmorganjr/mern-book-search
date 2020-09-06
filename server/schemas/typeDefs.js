// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type Book {
    bookId: String
    title: String
}

type Query {
    me(username: String): [User]
}

type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(bookId: ID!, description: String!, title: String!): User
}

type Auth {
    token: ID!
    user: User
}
`;

// export the typeDefs
module.exports = typeDefs;