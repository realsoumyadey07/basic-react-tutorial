import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import "./App.css";
import FoodInput from "./components/FoodInput";
function App() {
  const [foodItems, setFoodItems] = useState([]);
  const handleKeyDown = (event) => {
    if (event.code == "Enter"){
      let newFoodItem = event.target.value
      event.target.value=""
      let newItem =[...foodItems,newFoodItem]
      setFoodItems(newItem)
    }
    console.log(event)
  };

  return (
    <Container>
      <div className="heading">Healthy Food</div>
      <FoodInput handleKeyDown={handleKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
