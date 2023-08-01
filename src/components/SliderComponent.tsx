import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrackVisibility from "react-on-screen";

const ProjectSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //<div className={`animate-zoomIn image-container ${isVisible ? '' : ''}`}>
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-container ${isVisible ? "animate-zoomIn" : ""}`}
            >
              <img
                className="m-auto w-96 h-64 border-2 border-black rounded-xl"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      )}
    </TrackVisibility>
  );
};

export default ProjectSlider;
