import React, {useContext} from 'react'
import { TodoItemsContext } from "../store/todo-items-store";
function EnjoyError() {
  const {todoItems} = useContext(TodoItemsContext);
  return (
     <>
    {todoItems.length ===0 && <h1>You can enjoy your day!</h1>}
    </>
  )
}
export default EnjoyError;