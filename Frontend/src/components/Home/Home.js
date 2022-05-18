import React, { Fragment, useEffect } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
// import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Carousels from "../Layout/examples/Carousel";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";
import MetaData from "../Layout/MetaData";
import {
  getAllCrystalsProducts,
  getAllProductsList,
} from "../../actions/productAction";

// image url -  http://i.ibb.co/DRST11n/1.webp

const Home = () => {
  const dispatch = useDispatch();

  const { error, loading, totalProductsList } = useSelector(
    (state) => state.productsList
  );

  const { productCrystals } = useSelector((state) => state.productsByCategory);

  useEffect(() => {
    if (error) {
      return error(error);
    }
    dispatch(getAllProductsList());
    dispatch(getAllCrystalsProducts());
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading ? (
        Loader
      ) : (
        <Fragment>
          <MetaData title="Home -- Utsavaa" />
          <Carousels />
          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">Bracelets</h2>
              <Link to="/products" className="Btn">
                View All
              </Link>
            </div>
            <div className="container" id="container">
              {totalProductsList &&
                totalProductsList
                  .slice(0, 12)
                  .map((product) =>
                    product.category === "Crystals" ? (
                      <ProductCard key={product._id} product={product} />
                    ) : undefined
                  )}
            </div>
          </div>

          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">Laptop</h2>
              <Link to="/products/crystals" className="Btn">
                View All
              </Link>
            </div>
            <div className="container" id="container">
              {totalProductsList &&
                totalProductsList.map((product, index) =>
                  product.category === "Laptop" ? (
                    index < 5 ? (
                      <ProductCard key={product._id} product={product} />
                    ) : undefined
                  ) : undefined
                )}
            </div>
          </div>

          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">Books</h2>
              <Link to="/products/crystals" className="Btn">
                View All
              </Link>
            </div>
            <div className="container" id="container">
              {totalProductsList &&
                totalProductsList.map((product) =>
                  product.category === "Books" ? (
                    <ProductCard key={product._id} product={product} />
                  ) : undefined
                )}
            </div>
          </div>

          <div className="product">
            <div className="categoryHeading">
              <h2 className="homeHeading">Crystals</h2>
              <Link to="/products/crystals" className="Btn">
                View All
              </Link>
            </div>
            <div className="container" id="container">
              {productCrystals &&
                productCrystals
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
