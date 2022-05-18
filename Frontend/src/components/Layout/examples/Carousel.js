import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="/home">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1652598113005-a75ff204263b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/products">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1652195598569-f523c6973b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="Second slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="/therapy-classes">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1652110770901-e4a4f279951c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
