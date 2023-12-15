import React from "react";
import style from '../components/Button.module.css'

function Button() {
  let buttons = ['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <>
    {buttons.map(e=> <button className={`${style.button}`}>{e}</button>
    )}
    </>
  );
}

export default Button;
