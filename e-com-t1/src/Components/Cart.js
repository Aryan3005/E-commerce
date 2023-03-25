import React, { useState } from "react";
import NavBarComponent from "./NavBar";
import "./Cart.css";
import Item_view from "./Items";

function Cart(props) {
  const [cart_value, setCartValue] = useState(0);

  function add() {
    setCartValue(cart_value + 1);
  }

  return (
    <div>
      <NavBarComponent />
      <h1>Items in cart</h1>
      <p>{cart_value}</p>
      <button onClick={add}>Add to cart</button>
    </div>
  );
}

export default Cart;