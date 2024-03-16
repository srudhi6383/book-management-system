const bcrypt = require('bcryptjs');
const User = require('../models/User');

const userResolver = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      return newUser;
    },
    updateUser: async (_, { id, username, email }) => {
      return await User.findByIdAndUpdate(id, { username, email }, { new: true });
    },
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    },
  },
};

module.exports = userResolver;
