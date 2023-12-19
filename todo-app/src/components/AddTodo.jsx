import React from "react";
import '../App.css'
import { useState } from "react";

function AddTodo({onNewItem}) {
  const [name,setName]=useState("");
  const [dueDate,setDate]=useState("");
  const changeName =(e)=>{
    console.log(e.target.value);
    let newName = e.target.value
    setName(newName);
  }
  const changeDate =(e)=>{
    console.log(e.target.value);
    let newDate = e.target.value;
    setDate(newDate);
  }
  
  return (
    <>
      <div className="row my-3 d-flex flex-wrap">
        <div className="col-6 d-flex">
          <input type="text" placeholder="Enter todo here" onChange={changeName} />
        </div>
        <div className="col-4 d-flex">
          <input type="date" onChange={changeDate} />
        </div>
        <div className="col-2 d-flex">
          <button className="btn btn-success kg-button" onClick={()=>{
    onNewItem(name,dueDate)} }>Add</button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
