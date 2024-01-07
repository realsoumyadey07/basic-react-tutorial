import React, { useContext } from 'react'
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'

export default function PostList() {
  const {postList} = useContext(PostListData);
  console.log(postList);
  return (
    <div className='container'>
    {postList.map((post)=>{
      return <Post key={post.id} post={post} />
    })}
     
    </div>
  )
}
