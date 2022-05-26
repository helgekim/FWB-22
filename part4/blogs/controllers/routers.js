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
 	
	if (!request.body.title) {
	 return response.status(403).json({'error': 'malformated data: no title'})
	} else if (!request.body.user ) {
	 return response.status(403).json({'error': 'user not found'})
	}


	const blog = new Blog(request.body)

  const show = await blog.save()

  const user = await User.findById(request.body.user);

  if (!user.blogs) {
   user.blogs = [].push(blog._id);
  } else {
   user.blogs = user.blogs.concat(blog._id)
  }
  
  await user.save()

 response.status(203).json(show)

});

module.exports = routers;
