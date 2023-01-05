import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "mazda", amount: 3000, date: new Date(2020, 2, 28) },
    { title: "ford", amount: 2000, date: new Date(2021, 3, 20) },
    { title: "nissan", amount: 1000, date: new Date(2022, 5, 23) },
    { title: "honda", amount: 500, date: new Date(2020, 7, 18) },
  ];

  return (
    <div>
      <h2>This is my list of cars</h2>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
//saw lecture 3 on 23.11
//need to see 30.11 lecture