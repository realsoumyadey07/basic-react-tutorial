import React from 'react'
import style from '../components/FoodInput.module.css'
function FoodInput({handleKeyDown}) {
    //  const handleOnChange = (e)=>{
    //       console.log(e.target.value)
    //  }
  return (
    <>
     <input 
     className={`${style.foodInput}`} type="text" 
     placeholder='Enter food item here' onKeyDown={handleKeyDown} />
    </>
  )
}
export default FoodInput