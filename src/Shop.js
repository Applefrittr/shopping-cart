import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
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

  // Preload the image files for each product in catalog smoother UI experience.  Fires only on fist render of Shop :)
  useEffect(() => {
    catalog.forEach((item) => {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = item.img1;
      img2.src = item.img2;
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar cart={cart} add={addCart} subtract={subtractCart} />
      <RoutePaths catalog={catalog} add={addCart} />
    </BrowserRouter>
  );
};

export default Shop;

// Helper function to convert number values into USD
export const convertUSD = (input) => {
  const price = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return price.format(input);
};
