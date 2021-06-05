import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // ?: 3 different states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [addingExpense, setAddingExpense] = useState(false);

  // ?:  1 State
  // const [enteredData, setEnteredData] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // !: use prevState instead of enteredData as react does not update immediately so prevState is safer
    // !: prevState is needed if new state depends on old state
    //   setEnteredData((prevState) => {
    //     return { ...prevState, title: event.target.value };
    //   });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setEnteredData({ ...enteredData, amount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setEnteredData({ ...enteredData, date: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // ?: Prevents the default behavior of the page refreshing

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // ?: This comes form the parent component
    cancelHandler(); // ?: Clears the input fields after submission and closes the form
  };

  const cancelHandler = () => {
    // setAddingExpense(false);
    props.onCancel();
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  // if (!addingExpense)
  //   return (
  //     <div>
  //       <button onClick={() => setAddingExpense(true)}>Add New Expense</button>
  //     </div>
  //   );

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // ?: 2 way binding allows you to gather input and then also change it by using the state changing func
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={cancelHandler} type="submit">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
