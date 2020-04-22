const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  date: {
    type: String
  },
  imageUrl: {
    type: String
  },
},{ timestamps: true }
);

module.exports = mongoose.model('Todo', Todo);