/* ✅ Assignment 11 — Post Reactions (Like + Comment Counters)
Instructions:
Build a simple “Post Reaction System”.
Show a fake post heading, like: “This is my first React post!”
Add two buttons:
Like
Add Comment
Keep two separate state variables: likes and comments.
Every time the user clicks Like → likes should increase by 1
Every time the user clicks Add Comment → comments should increase by 1
Display updated numbers on the screen.
Expected Output Example:
Likes: 3 | Comments: 1
 */


import { useState } from "react";

export default function PostReaction(){
    let [like, setLike] = useState(0);
    let [comment, setComment] = useState(0);

     function IncreaseLike() {
        setLike(like + 1);
    }
    function IncreaseComments(){
        setComment(comment + 1)
    }

    return (
        <div>
            <h2>Assignment 11:  PostReaction</h2>

            <h3>This is my first React post!</h3>
            <p>like: {like} | comment: {comment}</p>
            <button onClick={IncreaseLike}>Like</button>
            <button onClick={IncreaseComments}>comments</button>
        </div>
    )
}
