const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/schema.graphql');
const resolvers = require('./resolvers/resolvers');
const connectDB = require('./config/db');
const { verifyToken } = require('./config/auth');

const app = express();
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    if (token) {
      const user = verifyToken(token);
      return { user };
    }
    return {};
  },
});

server.start().then(() => {
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`)
  );
});
