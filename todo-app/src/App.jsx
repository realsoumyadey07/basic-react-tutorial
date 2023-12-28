import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import EnjoyError from "./components/EnjoyError";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);
  const onNewItem = (name, dueDate) => {
    console.log(`New item added ${name} Date is: ${dueDate}`);
    let newTodoItems = [...todoItems, { name: name, dueDate: dueDate }];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoName) => {
    let newItem = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newItem);
    console.log("Item deleted");
  };

  return (
    <>
      
        <div className="todo-content container">
          <AppName/>
          <AddTodo onNewItem={onNewItem} />
          <EnjoyError todoItems={todoItems} />
          <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems} />
          
        </div>
      
    </>
  );
}

export default App;
