import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MyCarousel = ({ items }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive}>
    
      {items.map((item, index) => (
        <div class="col" key={index}>
    <div class="card h-100">
      <img src={item.url} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.petName}</h5>
        <p class="card-text">
          {item.description}
        </p>
      </div>
    </div>
  </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
