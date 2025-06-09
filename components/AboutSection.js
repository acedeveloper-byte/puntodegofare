import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="about mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="titlepage about-reser" data-aos="fade-in">
              <h3>Reserva con Punto de Go Fare</h3>
              <span>
                En Punto de Go Fare, hacemos que viajar en avión sea sencillo, económico y accesible. Como plataforma independiente, nos especializamos en ofrecer opciones competitivas de billetes de avión en una amplia gama de rutas nacionales e internacionales. Ya sea que estés planeando una escapada rápida o una aventura global, nuestro objetivo es ayudarte a encontrar las mejores tarifas con facilidad y confianza, todo en un solo lugar. No estamos afiliados a ninguna aerolínea en particular, lo que nos permite centrarnos exclusivamente en ofrecerte las mejores ofertas de viaje y comparativas honestas. Desde ofertas de última hora hasta descuentos de temporada, Punto de Go Fare es tu destino ideal para ahorrar en vuelos, con una experiencia de reserva fluida y un soporte dedicado en cada paso del proceso.              </span>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-in">
            <img
              src="/images/plane-img.png"
              alt="Airplane"
              className="img-fluid custom-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
