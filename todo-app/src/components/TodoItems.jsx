import React from "react";
import TodoItem from "./TodoItem";

export default function TodoItems({todoItems}) {
  return (
    <>
      <div className="items-container">
      {todoItems.map(e=><TodoItem todoDate={e.dueDate} key={e.name} todoName={e.name} />)}
      </div>
    </>
  );
}
