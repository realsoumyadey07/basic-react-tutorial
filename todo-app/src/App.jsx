import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "6/10/2023",
    },{
      name: "Spoken in english",
      dueDate: "5/10/2023",
    }
  ];
  const[todoItems, setTodoItems]=useState(initialTodoItems);
  const onNewItem = (name, dueDate)=>{
    console.log(`New item added ${name} Date is: ${date}`);
    let newTodoItems =[...todoItems,{name: name,dueDate:dueDate}];
    setTodoItems(newTodoItems);
  }

  return (
    <>
      <div className="todo-content container">
        <AppName />
        <AddTodo onNewItem={onNewItem} />
        <TodoItems todoItems={todoItems}/>
      </div>
    </>
  );
}

export default App;
