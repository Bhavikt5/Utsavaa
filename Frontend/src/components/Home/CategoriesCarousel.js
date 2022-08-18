import React, { Fragment } from "react";
import "./CategoriesCarousel.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { categoriesData } from "./categoriesData";

const CategoriesCarousel = () => {
  return (
    <Fragment>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {categoriesData.map((i) => {
          return (
            <SwiperSlide>
              <a href={i.link}>
                <img
                  className="d-block w-100"
                  src={i.image}
                  alt="First slide"
                />
                <h1>{i.title}</h1>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default CategoriesCarousel;
