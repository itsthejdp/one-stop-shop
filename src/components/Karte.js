import { useState, React } from "react";
import Modal from "./Modal";

export default function Karte(props) {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  function functionName() {
    setCartIsOpen(true);
  }

  const cartItems = (
    <ul>
      {[{ id: "i1", name: "Ralph Lauren", amount: 3, price: 14.99 }].map(
        (item) => (
          <li key={item.id}>
            {item.name}
            {item.price}
          </li>
        )
      )}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.54</span>
      </div>
      <div>
        <button onClick={functionName}>Close</button>
        <button>Checkout</button>
      </div>
    </Modal>
  );
}
