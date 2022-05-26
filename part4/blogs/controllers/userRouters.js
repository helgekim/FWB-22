const userRouters = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

userRouters.post('/users', async (request, response) => {

 const {username, name, password} = request.body;

 if (password.length < 4) {
	return response.status(404).json({error: "pass contains less than 4 chars"});
 }
  if (username.length < 3) {
  return response.status(404).json({error: "cannot create a username with less than 3 chars"})
  }

 const findUsers = await User.findOne({username});

 if (findUsers) {
  return response.status(404).json({error: "cannot create a user with a similar username"});
 };

 const passwordHash = await bcrypt.hash(password, 12);

  const newUser = new User(
	{username, name, passwordHash})

  const saved = await newUser.save();
  return response.status(201).json(saved);
})

userRouters.get('/users', (request, response) => {

 User.find({}).populate('blogs').then(users => response.status(203).json(users));

     

}) 


module.exports = userRouters;
