import { useState, React } from "react";
import NavBar from "../NavBar";
import Modal from "../Modal";
import Backdrop from "../Backdrop";
import Karte from "../Karte";

export default function Layout(props) {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <div>
      <div>
        <NavBar />
        <main>{props.children}</main>
        {cartIsOpen && <Modal />}
        {cartIsOpen ? <Backdrop /> : null}
      </div>
      {cartIsOpen ? <Karte /> : null}
    </div>
  );
}
