import React from "react";
import Item from "./Item";
import classes from "./List.module.css";

export default function List(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return (
          <Item
            title={item.title}
            key={item.id}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </ul>
  );
}
