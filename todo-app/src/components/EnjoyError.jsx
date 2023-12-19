import React from 'react'

function EnjoyError({todoItems}) {
  return (
     <>
    {todoItems.length==0?<h1>You can enjoy your day!</h1>:""}
    </>
  )
}
export default EnjoyError;