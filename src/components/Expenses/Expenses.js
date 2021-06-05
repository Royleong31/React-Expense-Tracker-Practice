import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;
  const currentYear = new Date().getFullYear();

  const [filter, setFilter] = useState(currentYear); // ?: Default year is the current year

  const filterChangeHandler = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    // ?: Uses 2 way binding as the selected year is used in the filter and in the UI
    <Card className="expenses">
      <ExpenseFilter selected={filter} onFilterChange={filterChangeHandler} />

      {expenses
        .filter((expense) => {
          return +expense.date.getFullYear() === +filter;
        })
        .map((expense, i) => (
          <ExpenseItem
            key={i + 1}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}

export default Expenses;

/*
{ <ExpenseItem
  title={expenses[0].title}
  amount={expenses[0].amount}
  date={expenses[0].date}
/>
<ExpenseItem
  title={expenses[1].title}
  amount={expenses[1].amount}
  date={expenses[1].date}
/>
<ExpenseItem
  title={expenses[2].title}
  amount={expenses[2].amount}
  date={expenses[2].date}
/>
<ExpenseItem
  title={expenses[3].title}
  amount={expenses[3].amount}
  date={expenses[3].date}
/> }*/
