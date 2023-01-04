import react from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//import form
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
