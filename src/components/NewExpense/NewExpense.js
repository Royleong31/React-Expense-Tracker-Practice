import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (exteredExpenseData) => {
    const expenseData = {
      ...exteredExpenseData,
      id: Math.random().toString(),
    };

    // ?: Function comes from App.js
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isEditing || (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={() => setIsEditing(false)}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
