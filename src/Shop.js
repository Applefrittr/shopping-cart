import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Products from "./Objects/Products";
import RoutePaths from "./Components/RoutePaths";

// Our main Shop component using react router to enable client-side navigation between different pages of the shop
const Shop = () => {
  // create a copy of our Products object imported from ./Objects/Products to be passed as a prop to other components
  const catalog = [...Products];
  // The cart is the main state the Shop app.  An array containing product objects that have been added by the user to the cart, passed to Navbar as a prop
  const [cart, setCart] = useState([]);

  // addCart callback to set the state of cart.  Passed as a prop. function to the ProductPage component (add button) as well as the
  // NavBar component (increment button)
  const addCart = (e) => {
    console.log(e.target.id);

    const item = catalog.find((product) => e.target.id === product.name); // find the object in catalog with the matching event target id

    // if target product is already in the cart, increment the count element.  Otherwise, add the new product to the cart
    if (cart.find((product) => product.name === item.name)) {
      setCart(
        cart.map((product) => {
          if (product.name === item.name) product.count++;
          return product;
        })
      );
    } else {
      setCart([...cart, item]);
    }
  };

  // subtractCart callback to set state of cart.  Passed as a prop. function to only to the Navbar component (decrement button in the cart)
  const subtractCart = (e) => {
    const item = cart.find((product) => e.target.id === product.name);

    if (item.count > 1) {
      setCart(
        cart.map((product) => {
          if (product.name === item.name) product.count--;
          return product;
        })
      );
    } else {
      setCart(cart.filter((product) => product.name !== item.name));
    }
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} add={addCart} subtract={subtractCart} />
      {/* <AnimatePresence exitBeforeEnter> 
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog catalog={catalog} />} />
          <Route
            path="/catalog/:name"
            element={<ProductPage add={addCart} catalog={catalog} />}
          />
        </Routes>
      </AnimatePresence>  */}
      <RoutePaths catalog={catalog} add={addCart}/>
    </BrowserRouter>
  );
};

export default Shop;
