import React from "react";

function TodoItem({todoName,todoDate}) {
  
  return (
    <>
      <div className="row my-3">
        <div className="col-6 d-flex ">{todoName}</div>
        <div className="col-4 d-flex ">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger d-flex">Delete</button>
        </div>
      </div>
    </>
  );
}
export default TodoItem