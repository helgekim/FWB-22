const loginRouter = require('express').Router();

// models
const User = require('../models/user');

// modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

loginRouter.post('/login', async (request, response) => {

if (!request.body.password || !request.body.username) {
  return response.status(401).json(
	{error: 'no login or username'})
};


const {username, password} = request.body;
const user = await User.findOne(
{username: username}
);

if (!user) {
   return response.status(401).json({error: 'no user'})
}

const passwordCorrect = await bcrypt.compare(password, user.passwordHash);
if (!passwordCorrect) {
   return response.status(401).json({error: 'password incorrect'});
}

const userForToken = {username: user.username, id: user._id};
const token = jwt.sign(userForToken, process.env.SECRET)



response.status(203).json({name: user.name, username: user.username, token: token})
})


module.exports = loginRouter;
