import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <div>
        {props.items.map((expense) => <ExpenseItem title={expense.title} 
        amount={expense.amount} date={expense.date}/>)} 
      </div>
    </Card>
  );
}

export default Expenses;
