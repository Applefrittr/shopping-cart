import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Cart from "./Cart"
import { useRef } from "react";

const Navbar = (props) => {
    // Hook useRef to target div.modal of the Navbar component, which we can then toggle the display using the displayCart method
    const ref = useRef()

    const displayCart = () => {
        ref.current.classList.toggle("display")
    }

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
        <li id="open-cart" onClick={displayCart}>Cart</li>
      </ul>
      <div className="modal" ref = {ref}>
          <Cart items = {props.cart} display = {displayCart}/>
      </div>
    </nav>
  );
};

export default Navbar;
