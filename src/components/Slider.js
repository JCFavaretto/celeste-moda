import React from "react";
import Slider from "react-slick";
import Item from "./Item";

export default function SimpleSlider() {
  const items = [];

  for (let i = 0; i < 10; i++) {
    items.push(
      <div style={{ marginRight: "10px" }}>
        <Item />
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return <Slider {...settings}>{items}</Slider>;
}
