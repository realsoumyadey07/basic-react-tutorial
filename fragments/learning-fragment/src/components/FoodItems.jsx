import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Item'

export default function FoodItems({items}) {
  const brought = (e)=>{
    console.log(`${e} is clicked`)
  }
  return (
    <div>
        <ul className="list-group">
        {items.map((e)=>
        <Item 
        key={e} 
        e={e}
        handleBuyButtonClick={()=>brought(e)}
        />)}  
        </ul>
    </div>
  )
}
