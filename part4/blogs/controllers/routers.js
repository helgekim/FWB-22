const routers = require('express').Router();
const Blog = require('../models/post');
const User = require('../models/user');

routers.get('/blogs', (request, response) => {
  Blog
    .find({})
    .populate('user')
    .then(blogs => {
      response.json(blogs)
    })
})

routers.post('/blogs', async (request, response) => {

const user = await User.findById(request.body.user);

	if (!request.body.title) {
	 return response.status(403).json({'error': 'malformated data: no title'})
	} else if (!request.body.user ) {
	 return response.status(403).json({'error': 'user not found'})
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
