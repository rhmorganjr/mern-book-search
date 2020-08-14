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
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}

type Auth {
    token: ID!
    user: User
}
`;

// export the typeDefs
module.exports = typeDefs;