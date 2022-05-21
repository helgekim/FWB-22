const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  author: {
 	 type: mongoose.Schema.Types.ObjectId,
 	 ref: 'User'
  },
  url: String,
  likes: Number
});

module.exports =  mongoose.model('Blog', blogSchema);

