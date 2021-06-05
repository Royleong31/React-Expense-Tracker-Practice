import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"; // ?: needs to import for the css styles

function ExpenseItem(props) {
  // ?: const can be used below as title is not really changed by us. It is a variable handled by react and is changed by react without being reassigned
  // const [title, setTitle] = useState(props.title); // ?: First variable is the variable, second is the function to change the variable
  // !: There was a bug when using useState() when the props.title was changed but the title did not change resulting in the wrong title being shown
  // !: This is because the title is not rerendered as setTitle() was not called

  // const clickHandler = () => {
  //   // !: React will not rerender the component even though title was changed unless useState() is used
  //   setTitle(() => Math.random().toString()); // ?: Tells react that you are changing the state, so react will rerender the component
  //   console.log(title); // ?: setTitle() does not change the variable right away but schedules it
  // };

  // props are the object that are passed from 1 component to another.
  // ?: instead of html names like class, it uses the js style of className

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
