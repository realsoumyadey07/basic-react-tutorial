import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessege from "./WelcomeMessege";

export default function PostList() {
  const { postList, addInitialPost } = useContext(PostListData);
  console.log(postList);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res)=>{
        addInitialPost(res.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessege onGetPostClick={handleGetPostsClick} />
      )}
      <div className="container">
        {postList.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
}
