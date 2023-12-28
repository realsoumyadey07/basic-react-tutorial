import React, { useContext} from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";

export default function TodoItems({todoItems,onDeleteClick}) {
  const todoItemsFromContext = useContext(TodoItemsContext);
  console.log(`items from context: ${todoItemsFromContext}`);
  return (
    <>
      <div className="items-container">
      {todoItems.map(e=><TodoItem todoDate={e.dueDate} onDeleteClick={onDeleteClick}  key={e.name} todoName={e.name}/>)}
      </div>
    </>
  );
}
