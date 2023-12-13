import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import './App.css'
function App() {

  
  return (
    <>
      <center className="todo-content">
      <AppName/>
      
        <div class="container text-center">
        <AddTodo/>
        <TodoItems/>
          

        </div>
      </center>
    </>
  );
}

export default App;
