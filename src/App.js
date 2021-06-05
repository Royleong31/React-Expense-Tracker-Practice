import { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2018, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Old Book",
      amount: 40,
      date: new Date(2019, 5, 12),
    },
  ]);

  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    const testExpenses = [...expenses];
    testExpenses.push(expense);

    setExpenses((prevExpenses) => {
      return testExpenses;
      // prevExpenses.push(expense);
      // return prevExpenses;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
