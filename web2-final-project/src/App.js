import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from 'react';

const DUMMY_EXPENSE = [
  { title: "mazda", amount: 3000, date: new Date(2020, 2, 28) },
  { title: "ford", amount: 2000, date: new Date(2021, 3, 20) },
  { title: "nissan", amount: 1000, date: new Date(2022, 5, 23) },
  { title: "honda", amount: 500, date: new Date(2020, 7, 18) },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    console.log('im in app.js');
    console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }
  return (
    <div>
      <h2>This is my list of cars</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
//saw 30.11 lecture until 1:00:00