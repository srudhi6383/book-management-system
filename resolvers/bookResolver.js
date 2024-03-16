const Book = require('../models/Book');

const bookResolver = {
  Query: {
    books: async () => {
      return await Book.find();
    },
  },
  Mutation: {
    addBook: async (_, { title, author, genre }) => {
      const newBook = new Book({ title, author, genre });
      await newBook.save();
      return newBook;
    },
    updateBook: async (_, { id, title, author, genre }) => {
      return await Book.findByIdAndUpdate(id, { title, author, genre }, { new: true });
    },
    deleteBook: async (_, { id }) => {
      return await Book.findByIdAndDelete(id);
    },
  },
};

module.exports = bookResolver;
