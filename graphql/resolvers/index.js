const { authQueryResolver, authMutationResolver } = require('./auth');

const rootResolver = {
  Query: {
    ...authQueryResolver,
  },
  Mutation: {
    ...authMutationResolver,
  }
}

module.exports = rootResolver;
