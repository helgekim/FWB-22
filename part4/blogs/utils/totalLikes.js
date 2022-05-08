function totalLikes(blogs) {

if (blogs.length > 1)
 {const value = blogs.map(blog => blog.likes).reduce((a, b) => {console.log(a, b); return a + b})
  return value;
}

return blogs[0].likes;

}

module.exports = {
totalLikes
}
