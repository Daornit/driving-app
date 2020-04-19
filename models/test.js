const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const TestSchema = new Schema({
  inputAnswer: [{
    content: String,
    image: String,
    isCorrect: Boolean
  }],
  description: {
    type: String
  },
  image: {
    type: String
  },
});

module.exports = mongoose.model('Test', TestSchema);