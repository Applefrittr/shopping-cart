import { useEffect, useRef } from "react";
import "../Styles/Cart.css";

const Cart = (props) => {
  const ref = useRef();

  // map out an array of the items and their respective quantities in the cart overlay.  Increment and decrement buttons added as well to modify the state of cart using prop
  // functions passed down from Shop.js
  const itemsArray = props.items.map((item) => {
    return (
      <div key={item.name}>
        <h3>{item.name}</h3>
        <div className="basket-item-count">
          <button id={item.name} onClick={props.subtract}>
            -
          </button>
          <div>{item.count}</div>
          <button id={item.name} onClick={props.add}>
            +
          </button>
        </div>
      </div>
    );
  });

  // props.cartDisplay is state passed from Navbar.  Anytime it's state is changed, we want to toggle the display of the cart by add/removing the "basket-display" css class
  useEffect(() => {
    if (props.cartDisplay) {
      ref.current.classList.add("basket-display");
    } else {
      ref.current.classList.remove("basket-display");
    }
  }, [props.cartDisplay]);

  return (
    <div className="basket" ref={ref}>
      <h1> This is the Cart Page</h1>
      {itemsArray}
      <button onClick={props.display}>Back</button>
    </div>
  );
};

export default Cart;
