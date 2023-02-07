import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useRef, useState } from "react";
import Stripes from "../Assets/Icons/stripes.png"

const Navbar = (props) => {
  // Hook useRef to target div.modal of the Navbar component, which we can then toggle the display using the displayCart method
  const ref = useRef();

  const refCount = useRef()

  // Navbar state cartCount is the number of items currently in the shooping cart
  const [cartCount, setCartCount] = useState(0);

  // Navbar state cartDisplay used to in Cart component to toggle display of the cart
  const [cartDisplay, setCartDisplay] = useState(false);

  // fires setCartCount if the prop.cart changes, will render new cartCount in the Navbar
  useEffect(() => {
    let count = 0;
    props.cart.forEach((item) => (count = count + item.count));
    setCartCount(count);
    if (count > 0) refCount.current.classList.add("count-display")
    else refCount.current.classList.remove("count-display")
  }, [props.cart]);

  // toggles the display of the shopping cart overlay.  SetTimeout used here bec. we want the div.modal container to display first, then the Cart component is faded in
  // inside the div.  When Cart is closed, fade out the Cart component first then remove the div.modal container after 1 second
  const displayCart = () => {
    if (!cartDisplay) {
      ref.current.classList.toggle("display");
      setTimeout(() => setCartDisplay(!cartDisplay), 0);
    } else {
      setCartDisplay(!cartDisplay);
      setTimeout(() => ref.current.classList.toggle("display"), 1000);
    }
  };

  return (
    <nav>
      <div className="nav-name">
        <div className="navlogo-container">
          <img src={Stripes} alt="Logo" className="navlogo" />
        </div>
        <h1><i>TURISMO DEALERSHIP</i></h1>
      </div>
      <ul>
        <li>
          <NavLink to="/" className="nav-links">Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className="nav-links">Shop</NavLink>
        </li>
        <li id="open-cart" onClick={displayCart}>
          <span>Cart</span> <span className="count" ref={refCount}>{cartCount}</span>
        </li>
      </ul>
      <div className="modal" ref={ref}>
        <Cart
          items={props.cart}
          display={displayCart}
          add={props.add}
          subtract={props.subtract}
          cartDisplay={cartDisplay}
        />
      </div>
    </nav>
  );
};

export default Navbar;
