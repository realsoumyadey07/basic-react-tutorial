import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

export default function TodoItems({ onDeleteClick }) {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <>
      <div className="items-container">
        {todoItems.map((e) => (
          <TodoItem
            todoDate={e.dueDate}
            onDeleteClick={onDeleteClick}
            key={e.name}
            todoName={e.name}
          />
        ))}
      </div>
    </>
  );
}
