import React from "react";

function TodoItems() {
  let todoName = "First item"
  let todoDate = "4/10/2023"
  return (
    <>
      <div class="row my-3">
        <div class="col-6 d-flex ">{todoName}</div>
        <div class="col-4 d-flex ">{todoDate}</div>
        <div class="col-2">
          <button className="btn btn-danger d-flex">Delete</button>
        </div>
      </div>
    </>
  );
}
export default TodoItems