import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Item'

export default function FoodItems({items}) {
  const [activeItems, setActiveItems]= useState([])
  const onBuyButton = (e,event)=>{
    console.log(`${e} is clicked`);
    let newItems = [...activeItems, e];
    setActiveItems(newItems);
  }
  return (
    <div>
        <ul className="list-group">
        {items.map((e)=>
        <Item
        bought={activeItems.includes(e)} 
        key={e} 
        e={e}
        handleBuyButtonClick={(event)=>onBuyButton(e,event)}
        />)}
        </ul>
    </div>
  )
}
