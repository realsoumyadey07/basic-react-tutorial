import React from 'react'
import style from '../components/Displya.module.css'

function Displya({displyaValue}) {
  return (
    <>
     <input 
     type="text" 
     className={style.displya} 
     value={displyaValue}
     readOnly/>
    </>
  )
}

export default Displya