  function compareBlogs(a, b, property) {

        if (a[property] <  b[property]) {
                return -1
        } 
	else if (a[property] >  b[property]) {
                return 1
         } 

	return 0

        }



function favouriteBlog(blogs) {

if (blogs.length == 1) {

 
  return {
 	 title: blogs[0].title,
 	 author: blogs[0].author,
 	 likes: blogs[0].likes
  }

} 

 else {
 const sorted = blogs.sort((a, b) => compareBlogs(a, b, 'likes'))
 const blog = sorted[sorted.length - 1]
 return {
	title:  blog.title,
	author: blog.author,
	likes: blog.likes
}

}

} 
module.exports = {
favouriteBlog, compareBlogs
}
