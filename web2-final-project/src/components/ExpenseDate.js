import "./ExpenseDate.css";

function ExpenseDate(props) {
  const date = new Date(props.date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { month: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__year">{day}</div>
    </div>
  );
}

export default ExpenseDate;
