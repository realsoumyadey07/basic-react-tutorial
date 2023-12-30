import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import EnjoyError from "./components/EnjoyError";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (name, dueDate) => {
    console.log(`New item added ${name} Date is: ${dueDate}`);
    let newTodoItems = [...todoItems, { name: name, dueDate: dueDate }];
    setTodoItems(newTodoItems);
  };
  const deleteItem = (todoName) => {
    let newItem = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newItem);
    console.log("Item deleted");
  };
  
  return (
    <>
      <TodoItemsContext.Provider value={{todoItems:todoItems,addNewItem: addNewItem, deleteItem:deleteItem}}>
        <div className="todo-content container">
          <AppName/>
          <AddTodo />
          <EnjoyError />
          <TodoItems  />
        </div>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
