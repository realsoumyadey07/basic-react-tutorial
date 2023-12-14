import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import './App.css'
function App() {

  let foodItems=["Dals","Green vegetables","Milk","Salads","Ghee","Roti"]

  return (
    <>
        <center className="heading">Healthy Food</center>
        <ErrorMessage items={foodItems}/>
        <FoodItems items={foodItems}/>
    </>
  );
}

export default App;
