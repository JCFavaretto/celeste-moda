import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container,
} from "reactstrap";
import ItemList from "./ItemList";

const items = [
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/celeste-moda.appspot.com/o/Conjunto1.png?alt=media&token=1100c4bb-8d80-4b82-8aa5-2097dd32d6df",

    altText: "Conjunto 1",
    caption: "Conjunto 1",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/celeste-moda.appspot.com/o/Conjunto2.png?alt=media&token=94beb337-f678-4614-a510-fc8258f9b8d7",
    altText: "Conjunto 2",
    caption: "Conjunto 2",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/celeste-moda.appspot.com/o/Conjunto3.png?alt=media&token=33d04916-344f-4c7c-af10-41d001ba8323",
    altText: "Conjunto 3",
    caption: "Conjunto 3",
  },
  {
    src:
      "https://firebasestorage.googleapis.com/v0/b/celeste-moda.appspot.com/o/Revendedoras.png?alt=media&token=83a20556-88e4-49d2-88ae-4bbd662ac04e",
    altText: "Revendedores",
    caption: "Revendedores",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    console.log(item);
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <ItemList count={4} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <Carousel
        className="mt-2"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Container>
  );
};

export default Slider;
