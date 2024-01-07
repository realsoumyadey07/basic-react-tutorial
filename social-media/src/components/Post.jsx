import React, { useContext } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";

import { PostList as PostListData } from "../store/post-list-store";
export default function Post({ post }) {
  const {deletePost}=useContext(PostListData);
  return (
    <div className="card post-card">
      
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <MdDeleteOutline onClick={()=>deletePost(post.id)}/>
        <p className="tags">{post.tags.map((e)=>"#"+e)}</p>
        <p className="card-text">{post.body}</p>
        <div className="reactions">
          <p>
            <AiTwotoneLike/>
            {post.reactions}
          </p>
            <FaRegComment/>
            <PiShareFat/>
          
        </div>
      </div>
    </div>
  );
}
