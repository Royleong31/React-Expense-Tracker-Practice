import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

function ExpensesList(props) {
  // ?: Use return statements instead of if else
  if (props.filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense, i) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
