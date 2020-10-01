import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { getTodos } from "../modules/posts";
import * as postsAPI from "../api/posts";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.todoReduce.todos);
  console.log(data);

  // * 컴포넌트 마운트 후 포스트 목록 요청.

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  if (loading) return <div>로딩중</div>;
  if (data) return <PostList posts={data} />;
  return null;
};

export default PostListContainer;
