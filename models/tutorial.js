const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const TutorialSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  video: {
    type: String
  },
  comment: [{
    commentDescription: String,
    createdDate: Date,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  }],
});

module.exports = mongoose.model('Tutorial', TutorialSchema);