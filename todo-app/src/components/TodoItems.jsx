import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoItems({todoItems,onDeleteClick}) {
  
  return (
    <>
      <div className="items-container">
      {todoItems.map(e=><TodoItem todoDate={e.dueDate} onDeleteClick={onDeleteClick}  key={e.name} todoName={e.name}/>)}
      </div>
    </>
  );
}
