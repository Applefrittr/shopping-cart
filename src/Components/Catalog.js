import ProductCard from "./ProductCard";
import "../Styles/Catalog.css";
import { Link } from "react-router-dom";
import AnimatePage from "./AnimatePage";
import { useEffect, useRef, useState } from "react";

const Catalog = (props) => {
  const ref = useRef();

  let btnRef = useRef() 

  const [productList, setProductList] = useState(props.catalog);

  const sortPrice = (e) => {
    if (btnRef.current === e.target) return
    else {
      btnRef.current.classList.remove("selected")
      btnRef.current = e.target
      btnRef.current.classList.add("selected")
      ref.current.classList.add("fade")
      setTimeout(() => {
        setProductList(
          props.catalog.filter((product) => {
            return product.price > btnRef.current.id && product.price <= btnRef.current.value;
          })
        );
      }, 750)        
      setTimeout(() => {
        ref.current.classList.remove("fade")
      }, 750)
    }
    
  };

  // create an array of ProductCard components from props.catalog recieved from Shop.js.  Each component is a clickable link to its own ProductPage component
  const cardArray = productList.map((product) => {
    return (
      <Link
        to={`/catalog/${product.name}`}
        key={product.name}
        className="card-link"
      >
        <ProductCard product={product} />
      </Link>
    );
  });

  return (
    <AnimatePage>
      <div id="shop-container">
        <div id="side-bar">
          <h2>
            <i>SHOP</i>
          </h2>
          <button onClick={sortPrice} id="0" value="1000000" ref={btnRef} className="selected">All Products</button>
          <h3>Price</h3>
          <button onClick={sortPrice} id="0" value="50000">$0-$50,000</button>
          <button onClick={sortPrice} id="50001" value="100000">$50,001-$100,000</button>
          <button onClick={sortPrice} id="100001" value="1000000">$100,000+</button>
        </div>

        <div className="products" ref={ref}>
          {cardArray}
        </div>
      </div>
    </AnimatePage>
  );
};

export default Catalog;
