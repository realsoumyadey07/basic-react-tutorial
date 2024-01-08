import React, { useContext, useRef } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {PostList as PostListData} from '../store/post-list-store';


export default function CreatePost() {
  const {addPost} = useContext(PostListData);

  const titleElement =useRef();
  const contentElement =useRef();
  const userIdElement =useRef();
  const reactionElement =useRef();
  const hashtagsElement =useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = titleElement.current.value;
    const content = contentElement.current.value;
    const reaction = reactionElement.current.value;
    const hashtags = hashtagsElement.current.value.split(/(\s+)/);

    userIdElement.current.value="";
    titleElement.current.value="";
    contentElement.current.value="";
    reactionElement.current.value="";
    hashtagsElement.current.value="";
    addPost(userId, postTitle, content, reaction, hashtags);
  }

  
  return (
     <form className='container' onSubmit={handleSubmit}>
     <div className="mb-3">
       <label htmlFor="title" className="form-label">Post Title</label>
       <input ref={titleElement} type="text" placeholder='How are you feeling today?' className="form-control" id="title"/>
     </div>
     <div className="mb-3">
       <label htmlFor="postContent" className="form-label">Post Content</label>
       <textarea ref={contentElement} type="text" rows={4} placeholder='Tell us more about it' className="form-control" id="body" />
     </div>
     <div className="mb-3">
       <label htmlFor="userId" className="form-label">User Id</label>
       <input ref={userIdElement} type="text" placeholder='User id' className="form-control" />
     </div>
     <div className="mb-3">
       <label htmlFor="reactions" className="form-label">Reactions</label>
       <input ref={reactionElement} type="text" placeholder='Reactions' className="form-control" />
     </div>
     <div className="mb-3">
       <label htmlFor="hashtags" className="form-label">Enter your hashtags</label>
       <input ref={hashtagsElement} type="text" placeholder='Please enter tags here' className="form-control" />
     </div>
     <button type="submit" className="btn btn-primary">Post</button>
   </form>
  )
}
