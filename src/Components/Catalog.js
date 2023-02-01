import ProductCard from "./ProductCard";
import "../Styles/Catalog.css";
import { Link } from "react-router-dom";
import AnimatePage from "./AnimatePage";

const Catalog = (props) => {
  // create an array of ProductCard components from props.catalog recieved from Shop.js.  Each component is a clickable link to its own ProductPage component
  const cardArray = props.catalog.map((product) => {
    return (
      <Link to={`/catalog/${product.name}`} key={product.name}>
        <ProductCard name={product.name} price={product.price} />
      </Link>
    );
  });

  return (
    <AnimatePage>
      <div id="shop-container">
        <h1> This is the Catalog Page</h1>
        <div id="products">{cardArray}</div>
      </div>
    </AnimatePage>
  );
};

export default Catalog;
