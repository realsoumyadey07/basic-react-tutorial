import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Item from './Item'

export default function FoodItems(props) {
  
  return (
    <div>
        <ul className="list-group">
        {props.items.map((e)=>
        <Item key={e} e={e}/>)}  
        </ul>
    </div>
  )
}
