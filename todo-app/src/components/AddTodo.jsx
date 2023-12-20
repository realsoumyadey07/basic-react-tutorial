import React from "react";
import '../App.css'
import { useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";

function AddTodo({onNewItem}) {
  const [name,setName]=useState("");
  const [dueDate,setDate]=useState("");
  const changeName =(e)=>{
    console.log(e.target.value);
    let newName = e.target.value;
    setName(newName);
  }
  const changeDate =(e)=>{
    console.log(e.target.value);
    let newDate = e.target.value;
    setDate(newDate);
  }
  const handleAddButtonClicked =()=>{
    if(name.length!==0 && dueDate.length!==0){
      onNewItem(name,dueDate);
      setName("");
      setDate("");
    }
    
  }
  
  return (
    <>
      <div className="row my-3 d-flex flex-wrap">
        <div className="col-6 d-flex">
          <input type="text"
          value={name} placeholder="Enter todo here" onChange={changeName} />
        </div>
        <div className="col-4 d-flex">
          <input type="date" value={dueDate} onChange={changeDate} />
        </div>
        <div className="col-2 d-flex">
          <button className="btn btn-success kg-button" onClick={handleAddButtonClicked }><MdOutlineLibraryAdd /></button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
