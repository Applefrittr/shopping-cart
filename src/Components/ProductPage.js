import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatePage from "./AnimatePage";
import "../Styles/ProductPage.css";
import { motion } from "framer-motion";
import Back from "../Assets/Icons/back.png"
import { convertUSD } from "../Shop";

const ProductPage = (props) => {
  // UseParams hook to access the URL name value passed by the <Route path="/shop/:name" ...> in Shop.js
  const { name } = useParams();
  const [product, setProduct] = useState({});

  // using name, we then find the matching item in the catalog to render the full details on the Product Page component
  useEffect(() => {
    setProduct(props.catalog.find((product) => product.name === name));
  }, [props.catalog, name]);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const usd = convertUSD(product.price);

  // framer motion method "method" motion used twice here: once in the AnimatePage component wrapper and again on the .product-page container element.  Transitions 
  // in the logo background of the product then after a short delay, transistions in the .product-page container with all product info and image
  return (
    <AnimatePage>
      <div
        className="product-page-container"
        style={{ backgroundImage: `url(${product.logo})` }}
      >
        <motion.div
          className="product-page"
          variants={animation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
            delay: 0.75,
          }}
        >
          <img
            src={product.img2}
            alt="Manufacturer"
            className="logo-container"
          ></img>
          <div className="info-container">
            <div className="info">
              <h1 className="name">
                <i>{product.name}</i>
              </h1>
              <div className="info-section">
                <h2>Production</h2>
                <div className="line-item">
                  <span>Manufacturer</span>
                  <span>{product.manufacturer}</span>
                </div>
                <div className="line-item">
                  <span>Year</span>
                  <span>{product.year}</span>
                </div>
                <div className="line-item">
                  <span>Country</span>
                  <span>{product.country}</span>
                </div>
              </div>
              <div className="info-section">
                <h2>Engine and Power</h2>
                <div className="line-item">
                  <span>Aspiration</span>
                  <span>{product.aspiration}</span>
                </div>
                <div className="line-item">
                  <span>Displacement</span>
                  <span>{product.displacement}</span>
                </div>
                <div className="line-item">
                  <span>Engine Type</span>
                  <span>{product.enginetype}</span>
                </div>
                <div className="line-item">
                  <span>Power</span>
                  <span>{product.power}</span>
                </div>
                <div className="line-item">
                  <span>Torque</span>
                  <span>{product.torque}</span>
                </div>
              </div>
              <div className="info-section">
                <h2>Drivetrain and Weight</h2>
                <div className="line-item">
                  <span>Drivetrain</span>
                  <span>{product.drivetrain}</span>
                </div>
                <div className="line-item">
                  <span>Weight</span>
                  <span>{product.weight}</span>
                </div>
                <div className="line-item">
                  <span>PWR</span>
                  <span>{product.pwr}</span>
                </div>
              </div>
              <div className="info-section">
                <h2>Dimensions</h2>
                <div className="line-item">
                  <span>Length</span>
                  <span>{product.length}</span>
                </div>
                <div className="line-item">
                  <span>Width</span>
                  <span>{product.width}</span>
                </div>
                <div className="line-item">
                  <span>Height</span>
                  <span>{product.height}</span>
                </div>
              </div>
              <div className="info-section">
                <div className="line-item">
                  <span>Price</span>
                  <h1>{usd}</h1>
                </div>
              </div>
              <button onClick={props.add} id={product.name} className="add-button">
                Add to Cart
              </button>
            </div>
          </div>
          <Link to={"/catalog"} id="back-container">
            <button id="back-button"><img src={Back} alt="Back"></img></button>
          </Link>
        </motion.div>
      </div>
    </AnimatePage>
  );
};

export default ProductPage;
