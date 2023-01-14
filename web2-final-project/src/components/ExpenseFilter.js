import React, { useState } from "react";

const ExpenseFilter = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const filterChangeHandler = (event) => {
    setFilterYear(event.target.value);
    console.log(`the year is ${event.target.value}`);
    props.onChangeFilter(event.target.value);
  };

  return (
    <select value={filterYear} onChange={filterChangeHandler}>
      <option value="">All</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
    </select>
  );
};

export default ExpenseFilter;
