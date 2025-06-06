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
                <h2>Explora los mejores destinos</h2>
                <span>
                Desde ciudades populares hasta tesoros escondidos, descubre ofertas de vuelos a destinos de todo el mundo a precios inmejorables. Contáctanos para reservar vuelos a tu destino soñado con tarifas reducidas.
                </span>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            <div className="item-card">
              <div class="item">
                <img class="img-responsive" src="images/miami.jpg" alt="#" />
                <h3>Ciudad de México
</h3>
                <p>
Experimenta el corazón de México con su rica cultura, monumentos históricos y gastronomía de primera clase. Encuentra las mejores tarifas hoy mismo.               </p>
              </div>
            </div>
            <div className="item-card">
              <div class="item">
                <img class="img-responsive" src="images/2.jpg" alt="#" />
                <h3>Los Ángeles</h3>
                <p>
                 Desde el glamour de Hollywood hasta playas soleadas, Los Ángeles lo tiene todo. Reserva ahora y vuela a un precio que se ajuste a tu presupuesto.

                </p>
              </div>
            </div>
            <div className="item-card">
              <div class="item">
                <img class="img-responsive" src="images/3.jpg" alt="#" />
                <h3>Cancún</h3>
                <p>
                Relájate en un paraíso con aguas cristalinas y resorts de lujo. No te pierdas nuestras últimas ofertas para esta escapada tropical.

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
