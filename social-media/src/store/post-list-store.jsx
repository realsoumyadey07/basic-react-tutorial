import { createContext, useReducer } from "react";


export const PostList = createContext({
     postList: [],
     addPost: ()=>{},
     deletePost: ()=>{}
});
const postListReducer=(currPostList, action)=>{
     return currPostList;
}
 
const PostListProvider =({children})=>{
     const[postList, dispatchPostList]= useReducer(postListReducer, DEFAULT_POST_LIST);
     const addPost =()=>{

     }
     const deletePost=(postId)=>{
          console.log("Deleted post "+ postId);
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