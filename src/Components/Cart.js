import { useEffect, useRef } from "react";
import { convertUSD } from "../Shop";
import "../Styles/Cart.css";
import Close from "../Assets/Icons/close.png";
import Add from "../Assets/Icons/add.png";
import Subtract from "../Assets/Icons/subtract.png";

const Cart = (props) => {
  const ref = useRef();
  let total = 0;

  // map out an array of the items and their respective quantities in the cart overlay.  Increment and decrement buttons added as well to modify the state of cart using prop
  // functions passed down from Shop.js
  const itemsArray = props.items.map((item) => {
    const usd = convertUSD(item.price * item.count);
    total += item.price * item.count;
    return (
      <div key={item.name} className="basket-item-container">
        <div>
          <img
            src={item.img1}
            alt={item.name}
            className="basket-thumbnail"
          ></img>
          <h3>{item.name}</h3>
        </div>
        <div className="basket-item-count">
          <span>{usd} x</span>
          <img
            src={Subtract}
            alt="-"
            className="increment"
            id={item.name}
            onClick={props.subtract}
          />
          <div>{item.count}</div>
          <img
            src={Add}
            alt="+"
            className="increment"
            id={item.name}
            onClick={props.add}
          />
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
      <h1>Shopping Cart</h1>
      {itemsArray}
      <button onClick={props.display} className="cart-back">
        <img src={Close} alt="Close" />
      </button>
      <div className="total">
        <h1>Total</h1>
        <h2>{convertUSD(total)}</h2>
      </div>
      <button className="checkout" onClick={checkOut}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;

const checkOut = (e) => {
  e.target.classList.add("checkout-msg")
  setTimeout(() => {
    e.target.classList.remove("checkout-msg")
  }, 2000)
}