import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../../src/images/slider1.jpg";
import Slider2 from "../../src/images/slider2.jpg";
import Slider3 from "../../src/images/slider3.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Carousel
      className="carousel-main"
      autoPlay="true"
      infiniteLoop="true"
      showThumbs="false"
    >
      <div>
        <img src={Slider1} alt="slider1" />
        <div className="legend">
          <h3 className="title">Your Look</h3>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <Link className="carousel-btn" src="#">
            Shop Now
          </Link>
        </div>
      </div>
      <div>
        <img src={Slider2} alt="slider2" />
        <div className="legend">
          <h3 className="title">Your Look</h3>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <Link className="carousel-btn" src="#">
            Shop Now
          </Link>
        </div>
      </div>
      <div>
        <img src={Slider3} alt="slider3" />
        <div className="legend">
          <h3 className="title">Your Look</h3>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
          <Link className="carousel-btn" src="#">
            Shop Now
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
