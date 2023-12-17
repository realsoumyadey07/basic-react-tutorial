import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import './App.css'
import FoodInput from "./components/FoodInput";
function App() {

  const [text,setText]= useState("");
  let foodItems=["Dals","Green vegetables","Milk","Salads","Ghee","Roti"]
  const handleOnChange = (event)=>{
    console.log(event.target.value)
    setText(event.target.value)
  }

  return (
    <Container>
        <div className="heading">Healthy Food</div>
        <FoodInput handleOnChange={handleOnChange}/>
        <ErrorMessage items={foodItems}/>
        <p>{text}</p>
        <FoodItems  items={foodItems}/>
    </Container>
  );
}

export default App;
