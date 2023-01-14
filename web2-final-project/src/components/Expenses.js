import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";
import React, { useState, useEffect } from "react";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter((expense) => {
    const date = new Date(expense.date);
    return (
      date.getFullYear().toString() === filterYear || filterYear === ""
    );
  });

  

  return (
    <Card className="expenses">
      <ExpenseFilter select={filterYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
