import { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses;
  const currentYear = new Date().getFullYear();

  const [filter, setFilter] = useState(currentYear); // ?: Default year is the current year

  const filterChangeHandler = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +filter
  );

  // let expensesOutput = <p>No expenses found!</p>;

  // if (filteredExpenses.length > 0)
  // expensesOutput = filteredExpenses.map((expense, i) => (
  //   <ExpenseItem
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   />
  // ));

  return (
    // ?: Uses 2 way binding as the selected year is used in the filter and in the UI
    <Card className="expenses">
      <ExpenseFilter selected={filter} onFilterChange={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

// ?: 1) Using ternary expression

// ?: 2) Setting a default value and reassigning

// ?: 3) Using short circuiting (using && ||)
// {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>} */}

// {/* {filteredExpenses.length === 0 ||
//   filteredExpenses.map((expense, i) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))} */}
