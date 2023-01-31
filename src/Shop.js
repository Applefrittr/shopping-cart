import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ProductPage from "./Components/ProductPage";
import { useState } from "react";
import Products from "./Objects/Products";
import Catalog from "./Components/Catalog";

// Our main Shop component using react router to enable client-side navigation between different pages of the shop
const Shop = () => {

  // create a copy of our Products object imported from ./Objects/Products to be passed as a prop to other components
  const catalog = [...Products]
  // The cart is the main state for the majority of the Shop app.  An array containing product objects that have been added by the user to the cart
  const [cart, setCart] = useState([]);
  
  // addCart callback to set the state of cart.  Passed as a prop. function to both the Catalog and the ProductPage components
  const addCart = (e) => {
    console.log(e.target.id);

    const item = catalog.find((product) => e.target.id === product.name); // find the object in catalog with the matching event target id
    setCart([...cart, item]);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog catalog={catalog}/>} />
        <Route path="/catalog/:name" element={<ProductPage add={addCart} catalog={catalog}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Shop;
