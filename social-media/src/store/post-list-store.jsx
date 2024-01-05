import { createContext, useReducer } from "react";


const PostList = createContext({
     postList: [],
     addPost: ()=>{},
     deletePost: ()=>{}
});
const postListReducer=(currPostList, action)=>{
     return currPostList;
}
 
const PostListProvider =({children})=>{
     const[postList, dispatchPostList]= useReducer(postListReducer, []);
     const addPost =()=>{

     }
     const deletePost=()=>{

     }
     return <PostList.Provider value={{
          postList,
          addPost,
          deletePost
     }}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = {
     id: '1',
     title: '',
     body: 'hi freinds I am going to go mumbai',
     reactions: 0,
     userId: '',
     tags: []
}
export default PostListProvider;