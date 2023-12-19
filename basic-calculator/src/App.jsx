import style from './App.module.css'
import Displya from './components/Displya.jsx'
import Button from './components/Button.jsx'
import { useState } from 'react'

function App() {  
  const [calVal, setCalVal]=useState("00"); 
  const onButtonClick =(e)=>{
    console.log(e);
    if (e ==='c'){
      setCalVal("");
    } else if(e==='='){
      let result = eval(calVal);
      setCalVal(result);
    }else if(e==='Del'){
      let result = calVal.substring(0,calVal.length-1);
      setCalVal(result);
    }else{
      let newDisplyaVal = calVal+ e;
      setCalVal(newDisplyaVal);
    }
  }  
  return (
    <div className={style.calculator}>
      <Displya displyaValue={calVal}/>
      <div className={`${style.buttons}`}>
        <Button onButtonClick={onButtonClick}/>
      </div>
    </div>
  )
}

export default App
