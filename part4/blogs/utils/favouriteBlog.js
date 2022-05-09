function favouriteBlog(blogs) {

	function compareBlogs(a, b) {

	 if (a.likes <  b.likes) {
 		return -1
 	 } 
	else if (a.likes >  b.likes) {
 		return 1
	 } 

	return 0

	}

if (blogs.length == 1) {

 
  return {
 	 title: blogs[0].title,
 	 author: blogs[0].author,
 	 likes: blogs[0].likes
  }

} 

 else {
 const sorted = blogs.sort(compareBlogs)
 const blog = sorted[sorted.length - 1]
 return {
	title:  blog.title,
	author: blog.author,
	likes: blog.likes
}

}

} 
module.exports = {
favouriteBlog
}
