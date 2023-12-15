import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
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
  return (
    <>
      <div className="todo-content container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems}/>
      </div>
    </>
  );
}

export default App;
