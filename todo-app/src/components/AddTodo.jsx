import React from "react";
import '../App.css'

function AddTodo() {
  return (
    <>
      <div className="row my-3 d-flex flex-wrap">
        <div className="col-6 d-flex">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4 d-flex">
          <input type="date" />
        </div>
        <div className="col-2 d-flex">
          <button className="btn btn-success kg-button">Add</button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
