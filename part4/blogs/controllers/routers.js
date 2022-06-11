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

routers.delete('/blogs/:id', async (request, response) => {

const token = getTokenFrom(request);
const decodedToken = jwt.verify(token, process.env.SECRET);

if (!decodedToken) {
	return  response.status(403).json({'error': 'token is either invalid or does not exist'})
}

const blogId = request.param.id;

const user = await User.findById(decodedToken.id);

const result = await Blog.deleteMany({
id: blogId, user: user.id
})

return response.status(203).json(result)


})

module.exports = routers;
