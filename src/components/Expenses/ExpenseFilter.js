// ?: This is a controlled component(like a stateless widget) as it is controlled by its parent component

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler} defaultValue={props.selected}>
          {/* <option value="2022">2022</option> */}
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
