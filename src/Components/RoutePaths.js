import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Catalog from "./Catalog";
import { AnimatePresence } from "framer-motion";

const RoutePaths = (props) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog catalog={props.catalog} />} />
        <Route
          path="/catalog/:name"
          element={<ProductPage add={props.add} catalog={props.catalog} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutePaths