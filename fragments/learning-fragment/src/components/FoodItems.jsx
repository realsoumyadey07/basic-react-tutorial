import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Item'

export default function FoodItems({items}) {
  
  return (
    <div>
        <ul className="list-group">
        {items.map((e)=>
        <Item 
        key={e} 
        e={e}
        handleBuyButtonClick={()=>console.log(`${e} is clicked`)}
        />)}  
        </ul>
    </div>
  )
}
