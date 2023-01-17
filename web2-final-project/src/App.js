import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Something went wrong with the products" + err);
      });
  }, []);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>This is my list of cars</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
//saw 7.12 lecture 
//started lecture 14.7
//worked alone on implementing mongoose.
//handled getting the products from mongoose.
//add product is on NewExpense.js
