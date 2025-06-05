import React from "react";
import Slider from "react-slick";

const CardSlick = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray",
          cursor: "pointer",
          padding: "5px",
          borderRadius: "15px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray",   cursor: "pointer",
        padding: "5px",
        borderRadius: "15px", }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div class="Tours">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>The Best Tours</h2>
                <span>
                  Embark on a journey of a lifetime with our expertly curated
                  selection of the best tours. Explore captivating destinations
                  that promise unforgettable moments. Immerse yourself in
                  enriching experiences, crafted to perfection. From cultural
                  gems to natural wonders, our tours redefine travel, ensuring
                  each adventure is a chapter of timeless memories waiting to
                  unfold.
                </span>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            <div className="item-card">
              <div class="item">
                <img class="img-responsive" src="images/miami.jpg" alt="#" />
                <h3>Miami</h3>
                <p>
                Experience the vibrant rhythm of Miami with our enticing tour, where sun-soaked beaches, eclectic neighborhoods, and pulsating nightlife converge to offer a taste of the city's lively and diverse atmosphere.
                </p>
              </div>
            </div>
            <div className="item-card">
              <div class="item">
                <img class="img-responsive" src="images/2.jpg" alt="#" />
                <h3>New York</h3>
                <p>
                  Dive into the dynamic energy of New York City with our
                  immersive tour, where towering skyscrapers, world-renowned
                  attractions, and eclectic neighborhoods create an
                  unforgettable tapestry of urban exploration.
                </p>
              </div>
            </div>
            <div className="item-card">
              <div class="item">
                <img class="img-responsive" src="images/3.jpg" alt="#" />
                <h3>London</h3>
                <p>
                Explore the heart of London with our captivating tour, where
                  the allure of history meets modern elegance, showcasing iconic
                  landmarks and cultural treasures.
                </p>
              </div>
            </div>
            <div className="item-card">
              <div class="item">
                <img class="img-responsive" src="images/lasvegas.jpg" alt="#" />
                <h3>Las Vegas</h3>
                <p>
                Immerse yourself in the bustling energy of New York City, where iconic skyscrapers, cultural landmarks, and diverse neighborhoods create an unparalleled urban adventure.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CardSlick;
