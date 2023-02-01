import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useRef, useState } from "react";

const Navbar = (props) => {
  // Hook useRef to target div.modal of the Navbar component, which we can then toggle the display using the displayCart method
  const ref = useRef();

  // Nvabar state cartCount is the number of items currently in the shooping cart
  const [cartCount, setCartCount] = useState(0);

  // fires setCartCount if the prop.cart changes, will render new cartCount in the Navbar
  useEffect(() => {
    let count = 0;
    props.cart.forEach((item) => (count = count + item.count));
    setCartCount(count);
  }, [props.cart]);

  // toggles the display of the shopping cart modal
  const displayCart = () => {
    console.log(props.cart);
    ref.current.classList.toggle("display");
    toggleBodyScroll();
  };

  return (
    <nav>
      <h1>Shop Name</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Shop</NavLink>
        </li>
        <li id="open-cart" onClick={displayCart}>
          Cart {cartCount}
        </li>
      </ul>
      <div className="modal" ref={ref}>
        <Cart
          items={props.cart}
          display={displayCart}
          add={props.add}
          subtract={props.subtract}
        />
      </div>
    </nav>
  );
};

export default Navbar;

// Helper function to disable scroll when the cart modal is open.  Using browser DOM api since we are manipulating the body tag - not created by React
const toggleBodyScroll = () => {
  const body = document.querySelector("body");
  body.classList.toggle("modal-open");
};
