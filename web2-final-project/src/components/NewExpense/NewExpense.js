import react from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//import form
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
