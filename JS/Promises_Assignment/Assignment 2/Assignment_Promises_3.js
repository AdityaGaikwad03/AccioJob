/* ## Assignment 3 — Multiple fetch and JSON parse (Promise.all + map)

### Instructions

- Use three fetch calls (same style you used):
    - users/1, posts/1, comments/1 from JSONPlaceholder.
- First `Promise.all` waits for responses.
- Then map responses to `res.json()` and run another `Promise.all`.
- Finally, log “User: …”, “Post: …”, “Comment: …”. */

const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

Promise.all([userData, postData, commentData])
.then((result) => {
    return Promise.all(result.map(res => res.json()));
})
.then((data) => {
    console.log("user:",data[0]);
    console.log("Post:",data[1]);
    console.log("comment:",data[2]);
    
})  
.catch((err) => console.log(err))
