import React from "react";

function PostList({ posts }) {
  console.log(posts);
  return (
    <ul>
      <li key={posts.id}>
        {posts.title}
        {!posts.completed ? <span> 미완료</span> : <span>완료</span>}
      </li>
    </ul>
  );
}

export default PostList;
