
function mostLikes(list) {

const authors = Array.from(new Set(list.map(blog => blog.author)));
//console.log(authors)

let likes = 0;
const numberOfLikes = [];

for (author in authors) {

 for (post in list) {
  
  if (list[post].author.match(authors[author])) {
    likes += list[post].likes;
   }

 }

 const object = {author: authors[author], likes: likes};
 console.log(object)
 numberOfLikes.push(object);
 likes = 0;

}

const mostLiked = numberOfLikes.sort((a, b) => {
 return b.likes  - a.likes
})


//console.log(mostLiked)
return mostLiked[0];

}

/*
mostLikes(
[
 {author: "JA", likes: 124}, {author: "JA", likes: 12}, {author: "KE", likes: 100}, {author: "KE", likes: 80}, {author: "IR", likes: 124}, {author: "KE", likes: 12}
]
)*/


module.exports = {
mostLikes
}
