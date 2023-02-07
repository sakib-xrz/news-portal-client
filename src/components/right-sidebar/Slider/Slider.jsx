import React from "react";
import Brand1 from "../../../assets/images/Brand1.png";
import Brand2 from "../../../assets/images/Brand2.png";

const Slider = () => {
  return (
    <div className="carousel w-full rounded-md mt-4 pb-4">
      <div id="slide1" className="carousel-item relative w-full">
        <img alt="" src={Brand2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="text-secondary text-3xl">
            ❮
          </a>
          <a href="#slide2" className="text-secondary text-3xl">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img alt="" src={Brand1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="text-secondary text-3xl">
            ❮
          </a>
          <a href="#slide1" className="text-secondary text-3xl">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
