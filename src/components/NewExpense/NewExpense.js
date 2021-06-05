import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
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
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
