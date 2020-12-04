import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Item from "components/Item";
import { Row, Col } from "reactstrap";
import useWindowDimensions from "hooks/useWindowDimensions";

const ItemCarousel = () => {
  const { width } = useWindowDimensions();

  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <Slide index={i} style={{ marginRight: "10px" }}>
        <Item />
      </Slide>
    );
  }

  const calculateSlides = () => {
    if (width > 992) {
      return 4;
    } else if (width > 768) {
      return 3;
    } else if (width > 576) {
      return 2.5;
    } else {
      return 2;
    }
  };

  return (
    <CarouselProvider
      className="item-carousel"
      naturalSlideWidth={1}
      naturalSlideHeight={2}
      totalSlides={items.length + 1}
      visibleSlides={calculateSlides()}
      infinite={true}
      isPlaying={true}
      interval={2500}
    >
      <Slider>{items}</Slider>
      <Row>
        <Col xs="2">
          <ButtonBack className="btn btn-secondary">Back</ButtonBack>
        </Col>
        <Col xs="8"></Col>
        <Col xs="2">
          <ButtonNext className="btn btn-secondary">Next</ButtonNext>
        </Col>
      </Row>
    </CarouselProvider>
  );
};

export default ItemCarousel;
