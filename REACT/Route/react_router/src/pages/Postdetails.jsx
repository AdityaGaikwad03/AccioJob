import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Postdetails() {
   const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [postId]);
    return (
          <div>
            {!postId ? (
              
                <h3>loding.......</h3> 
            ) : (
                <div>
            <h2>Post Details Page</h2>
            <p>Post ID: {postId}</p>
            <p style={{fontWeight : "700", fontSize: "25px"}}>{post?.title}</p>
            <p>{post?.body}</p>
            </div>
            )}
            </div>
    );
}