const { Book } = require('../models');

const resolvers = {
    Query: {
      books: async () => {
        return Book.find().sort({ createdAt: -1 });
      }
    }
  };