const Tutorial = require('mongoose').model('Tutorial');
const {
  transformTutorial
} = require('./merge');

module.exports = {
  tutorialQueryResolver: {
    tutorials: async (parent, args, context, info) => {
      try {
        const tutorials = await Tutorial.find();
        return tutorials.map(tutorial => transformTutorial(tutorial));
      } catch (err) {
        throw err;
      }
    }
  },
  tutorialMutationResolver: {
    // addTutorial: async (parent, args, context, info) => {
    //   return {
    //     _id: "fdsaf",
    //     title: "sdfasf",
    //     description: "String",
    //     video: "String",
    //     image: "String",
    //   }
    // }

    addTutorial: async (parent, args, context, info) => {
      try {
        console.log("args:: ", args);
        const existingTutorial = await Tutorial.findOne({
          title: args.tutorial.title
        });
        if (existingTutorial) {
          throw new Error('Tutorial exists already.');
        }

        const tutorial = new Tutorial({
          title: args.tutorial.title,
          description: args.tutorial.description,
          image: args.tutorial.image,
          video: args.tutorial.video,
        });


        const result = await tutorial.save();
        return transformTutorial(result);

      } catch (err) {
        throw err;
      }
    },
    removePost: async (parent, args, context, info) => {
      try {
        const result = await Course.findByIdAndDelete(args.postId);
        return transformCourse(result);
      } catch (err) {
        throw err;
      }
    },
  }
};