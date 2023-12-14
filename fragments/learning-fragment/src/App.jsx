import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {

  // let foodItems = []
  let foodItems=["Dals","Green vegetables","Milk","Salads","Ghee","Roti"]
  let emptyItems = foodItems.length===0? <h3>I am still hungry</h3>:null

  return (
    <>
        <center>Healthy Food</center>
        {emptyItems}
        <ul className="list-group">
        {foodItems.map((e)=><li className="list-group-item" key={e}>{e}</li>)}  
        </ul>
    </>
  );
}

export default App;
