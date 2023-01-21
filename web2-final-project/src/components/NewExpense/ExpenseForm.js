import React, { useEffect, useState } from "react";
import ExpenseDate from "../ExpenseDate";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [line, setLine] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`${enteredAmount} ${enteredDate} ${enteredTitle}`);
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setLine(enteredDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // useEffect(() => {
  //   fetch("http://localhost:3000")
  //     .then((Response) => Response.json())
  //     .then((data) => {
  //       setEnteredTitle(data.title);
  //       setEnteredAmount(data.amount);})
  //     .catch((err) => console.log("Something went wrong " + err));
  // }, [line]);
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2027-01-01"
          />
        </div>
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
