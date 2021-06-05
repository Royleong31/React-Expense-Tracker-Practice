import "./Card.css";

// ?: Functions as a wrapper component, adding the card functionality
function Card(props) {
  // const cardClass = props.className + ' card';
  return <div className={props.className + " card"}>{props.children}</div>;
}

export default Card;
