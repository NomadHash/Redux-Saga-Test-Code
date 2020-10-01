import React from "react";

function PostList({ posts }) {
  console.log(posts);
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            {post.id} {post.body}
          </li>
        );
      })}
    </ul>
  );
}

export default PostList;
