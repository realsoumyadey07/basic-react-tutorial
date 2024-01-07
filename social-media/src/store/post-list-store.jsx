import { createContext, useReducer } from "react";


export const PostList = createContext({
     postList: [],
     addPost: ()=>{},
     deletePost: ()=>{}
});
const postListReducer=(currPostList, action)=>{
     let newPostList = currPostList;
     if(action.type=== 'DELETE_POST'){
          newPostList = currPostList.filter(post=> post.id !== action.payload.postId)
     }else if(action.type=== 'ADD_POST'){
          newPostList = [...currPostList,action.payload];
     }
     return newPostList;
}
 
const PostListProvider =({children})=>{
     const[postList, dispatchPostList]= useReducer(postListReducer, DEFAULT_POST_LIST);
     const addPost =(userId, postTitle, content, reaction, hashtags)=>{
          console.log(userId, postTitle, content, reaction, hashtags);
          dispatchPostList({
               type: 'ADD_POST',
               payload:{
                    id: userId,
                    title: postTitle,
                    body: content,
                    reactions: reaction,
                    userId: Date.now(),
                    tags: hashtags
               }
          })

     }
     const deletePost=(postId)=>{
          console.log("Deleted post "+ postId);
          dispatchPostList({
               type: 'DELETE_POST',
               payload:{
                    postId,
               }
          })
     }
     return <PostList.Provider value={{
          postList,
          addPost,
          deletePost
     }}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = [{
     id: '1',
     title: 'Going to Mumbai',
     body: 'hi freinds I am going to go mumbai',
     reactions: 2,
     userId: 'user-9',
     tags: ["Vacation","Mumbai","Enjoying"]
},
{
     id: '2',
     title: 'Pass ho gaya bhai',
     body: '3 sall k gisai k baad bhi naukri nehi mili',
     reactions: 10,
     userId: 'user-6',
     tags: ["Failer","Asuasal"]
}]
export default PostListProvider;