const compareBlogs = require('./favouriteBlog.js').compareBlogs;

function mostBlogs(list) {

const authors = Array.from(new Set(list.map(blog => blog.author)));
//console.log(authors)

let posts = 0;
const numberOfPosts = [];

for (author in authors) {

 for (post in list) {
  
  if (list[post].author.match(authors[author])) {
    posts++
   }

 }

 const object = {author: authors[author], blogs: posts};
 console.log(object)
 numberOfPosts.push(object);
 posts = 0;

}

const activeWriter = numberOfPosts.sort((a, b) => {
 return b.blogs - a.blogs
})
//console.log(activeWriter)
return activeWriter[0];

}

/*
mostBlogs(
[
 {author: "JA"}, {author: "JA"}, {author: "KE"}, {author: "KE"}, {author: "IR"}, {author: "KE"}
]
)*/


module.exports = {
mostBlogs
}
