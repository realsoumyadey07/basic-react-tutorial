import React from "react";
import '../App.css'
import { useRef } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";

function AddTodo({onNewItem}) {
  
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const handleAddButtonClicked =(event)=>{
    console.log(event);
    event.preventDefault();
    const name= todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    if(name.length!==0 && dueDate.length!==0){
      console.log(name, dueDate);
      onNewItem(name,dueDate);
      todoNameElement.current.value="";
      todoDateElement.current.value="";
    } 
  }
  return (
    <>
      <div className="row my-3 d-flex flex-wrap">
        <div className="col-6 d-flex">
          <input type="text"
          ref={todoNameElement}
          placeholder="Enter todo here"  />
        </div>
        <div className="col-4 d-flex">
          <input type="date" ref={todoDateElement}   />
        </div>
        <div className="col-2 d-flex">
          <button className="btn btn-success kg-button" onClick={handleAddButtonClicked}><MdOutlineLibraryAdd /></button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
