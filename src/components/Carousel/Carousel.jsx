import React from "react";
import { Carousel } from "antd";
import "./Carousel.scss";

const CarouselHome = () => (
    <div>
    <h4> Top Liked posts Last week</h4>
  <Carousel autoplay className="carousel">
    <div className="ft1" />
    <div className="ft2" />
    <div className="ft3" />
    <div className="ft4" />
  </Carousel>
  </div>
);
export default CarouselHome;