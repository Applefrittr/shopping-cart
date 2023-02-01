import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatePage from "./AnimatePage";

const ProductPage = (props) => {
  // UseParams hook to access the URL name value passed by the <Route path="/shop/:name" ...> in Shop.js
  const { name } = useParams();
  const [product, setProduct] = useState({});

  // using name, we then find the matching item in the catalog to render the full details on the Product Page component
  useEffect(() => {
    setProduct(props.catalog.find((product) => product.name === name));
  }, [props.catalog, name]);

  return (
    <AnimatePage>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <Link to={"/catalog"}>
        <button>Back</button>
      </Link>
      <button onClick={props.add} id={product.name}>
        Add
      </button>
    </AnimatePage>
  );
};

export default ProductPage;
