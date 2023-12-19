import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import EnjoyError from "./components/EnjoyError";
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to college",
  //     dueDate: "6/10/2023",
  //   },{
  //     name: "Spoken in english",
  //     dueDate: "5/10/2023",
  //   }
  // ];
  const[todoItems, setTodoItems]=useState([]);
  const onNewItem = (name, dueDate)=>{
    console.log(`New item added ${name} Date is: ${dueDate}`);
    let newTodoItems =[...todoItems,{name: name,dueDate:dueDate}];
    setTodoItems(newTodoItems);
  }
  const handleDeleteItem=(todoName)=>{
    let newItem = todoItems.filter(item=> item.name!== todoName);
    setTodoItems(newItem);
    console.log("Item deleted");
  }

  return (
    <>
      <div className="todo-content container">
        <AppName />
        <AddTodo onNewItem={onNewItem} />
        <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems}/>
        <EnjoyError todoItems={todoItems}/>
      </div>
    </>
  );
}

export default App;
