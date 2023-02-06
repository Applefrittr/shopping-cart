import ProductCard from "./ProductCard";
import "../Styles/Catalog.css";
import { Link } from "react-router-dom";
import AnimatePage from "./AnimatePage";
import { useRef, useState } from "react";

const Catalog = (props) => {
  const ref = useRef(); // React useRef used here to ref the products container to be faded in and out using CSS classes when a new range is selected
  let btnRef = useRef() // React useRef used to add psuedo element "//" to the selected range

  const [productList, setProductList] = useState(props.catalog);

  // Ranges to be used in our Price filter buttons
  const Ranges = {
    all : {
      min: 0,
      max: 1000000
    },
    low : {
      min: 0,
      max: 50000
    },
    mid : {
      min: 50001,
      max: 100000
    },
    high : {
      min: 100001,
      max: 1000000
    }    
  }

  // displays products that fall within the Ranges object.  Uses the Event object to identify which range is selected by the user according to the element's ID
  const sortPrice = (e) => {
    if (btnRef.current === e.target) return
    else {
      // update the btnRef to ensure psuedo element "//" get removed and added to new selected range
      btnRef.current.classList.remove("selected")
      btnRef.current = e.target
      btnRef.current.classList.add("selected")
      ref.current.classList.add("fade")  // fade out product container

      let range = Ranges[btnRef.current.id]
      
      // setTimeouts used here to add the fade out and fade in effects.  Essentially hides the re-render from the user and then fades the container back
      // in once re-render is complete
      setTimeout(() => {
        setProductList(
          props.catalog.filter((product) => {
            return product.price > range.min && product.price <= range.max;
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
          <button onClick={sortPrice} id="all" ref={btnRef} className="selected">All Products</button>
          <h3>Price</h3>
          <button onClick={sortPrice} id="low">$0-$50,000</button>
          <button onClick={sortPrice} id="mid">$50,001-$100,000</button>
          <button onClick={sortPrice} id="high">$100,000+</button>
        </div>

        <div className="products" ref={ref}>
          {cardArray}
        </div>
      </div>
    </AnimatePage>
  );
};

export default Catalog;
