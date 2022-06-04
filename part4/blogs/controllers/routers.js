const routers = require('express').Router();
const Blog = require('../models/post');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization) {
    return authorization
  }
  return null
}


routers.get('/blogs', (request, response) => {
  Blog
    .find({})
    .populate('user')
    .then(blogs => {
      response.json(blogs)
    })
})

routers.post('/blogs', async (request, response) => {

const token = getTokenFrom(request)
const decodedToken = jwt.verify(token, process.env.SECRET)
 if (!decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
 }

const user = await User.findById(decodedToken.id);

if (!request.body.title) {
	 return response.status(403).json({'error': 'malformated data: no title'})
} 

	const blog = new Blog(request.body)

  const show = await blog.save()
 
  if (user.blogs){
	user.blogs = user.blogs.concat(show.id)
  } else {
	user.blogs = [show.id]
  }  
  await user.save();

 response.json(show)

});

module.exports = routers;
