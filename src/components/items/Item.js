import Card from "../ui/Card";
// import "./ui/Card.module.css";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3> {props.title} </h3>
          <p>{props.price}</p>
          <p>{props.description}</p>
        </div>
        <div className={classes.action}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

export default Item;
