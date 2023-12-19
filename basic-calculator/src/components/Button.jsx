import React from "react";
import style from '../components/Button.module.css'

function Button({onButtonClick}) {
  let buttons = ['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.','Del']
  return (
    <>
    {buttons.map(e=> <button className={`${style.button}`} key={e} onClick={()=>onButtonClick(e)}>{e}</button>
    )}
    </>
  );
}

export default Button;
