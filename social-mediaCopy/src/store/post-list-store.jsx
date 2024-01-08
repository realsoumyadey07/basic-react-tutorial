import { createContext, useReducer } from "react";


export const PostList = createContext({
     postList: [],
     addInitialPost: ()=>{},
     addPost: ()=>{},
     deletePost: ()=>{}
});
const postListReducer=(currPostList, action)=>{
     let newPostList = currPostList;
     if(action.type=== 'DELETE_POST'){
          newPostList = currPostList.filter(post=> post.id !== action.payload.postId)
     }else if(action.type=== 'ADD_POST'){
          newPostList = [...currPostList,action.payload];
     }else if(action.type=== 'ADD_INITIAL_POST'){
          newPostList = action.payload.posts;
     }
     return newPostList;
}
 
const PostListProvider =({children})=>{
     const[postList, dispatchPostList]= useReducer(postListReducer, []);
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
     const addInitialPost =(posts)=>{
          dispatchPostList({
               type: 'ADD_INITIAL_POST',
               payload:{
                    posts
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
          addInitialPost,
          addPost,
          deletePost
     }}>{children}</PostList.Provider>
}


export default PostListProvider;