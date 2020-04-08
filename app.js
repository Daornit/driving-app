const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const isAuth = require('./middleware/is-auth');

require('dotenv').config();

// all models 
require('./models/user');
// require('./models/file');
// require('./models/post');
// require('./models/comment');
// require('./models/category');
// require('./models/notification');
// require('./models/postAndCategory');

const graphQlSchema = require('./graphql/schema');
const graphQlResolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  context: async ({ req }) => {
    if(!req.isAuth) {
      return { user: {}, isAuth: req.isAuth };
    }
    return { user: { ...req.user }, isAuth: req.isAuth };
  },
  typeDefs: graphQlSchema, 
  resolvers: graphQlResolvers 
});

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
  }
  next();
});
  
app.use(isAuth);

server.applyMiddleware({ app });


mongoose.connect(process.env.DATABASE_URL).then(() => {
  app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}).catch(err => {
  throw err;
})
