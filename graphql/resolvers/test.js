const Test = require('mongoose').model('Test');
const {
  transformTest
} = require('./merge');

module.exports = {
  testQueryResolver: {
    tests: async (parent, args, context, info) => {
      try {
        const tests = await Test.find();
        return tests.map(test => transformTest(test));
      } catch (err) {
        throw err;
      }
    }
  },
  testMutationResolver: {
    addTest: async (parent, args, context, info) => {
      try {
        console.log("args:: ", args);

        const test = new Test({
          description: args.test.description,
          image: args.test.image,
          inputAnswer: args.test.inputAnswer,
        });

        console.log("test::", test)

        const result = await test.save();
        return transformTest(result);
      } catch (err) {
        throw err;
      }
    },
    removeTest: async (parent, args, context, info) => {
      try {

        const result = await Test.findByIdAndDelete(args.testId);
        return transformTest(result);

      } catch (err) {
        throw err;
      }
    },
  }
};