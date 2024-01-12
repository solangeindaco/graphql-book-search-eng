const typeDefs = `
  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input BookContent {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookContent: BookContent!): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
