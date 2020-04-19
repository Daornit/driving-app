const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const PostSchema = new Schema({
  title: {
    type: String
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  type: {
    type: String,
    enum: [
      'NOTICE',
      'LEGAL',
      'ADVICE',
      'DUREM'
    ],
    default: 'NOTICE'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdDate: {
    type: Date,
    default: new Date()
  },
});

module.exports = mongoose.model('Post', PostSchema);