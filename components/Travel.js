import React from "react";

const Travel = () => {
  return (
    <>
      <div id="travel" class="traveling">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ">
              <div class="titlepage">
                <h2>Por qué Punto de Go Fare es el mejor</h2>
                <span>
                En Punto de Go Fare trabajamos con el único objetivo de que tu viaje sea inolvidable.
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <img src="/images/project/flight.png" alt="icon" />
                <h3>Reserva fácil
</h3>
                <p>Con nosotros, puedes reservar tus billetes sin esfuerzo.</p>
                <div class="read-more">
                  <a href="#" className="diagonal">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <i>
                  <img src="/images/project/money.png" alt="icon" />
                </i>
                <h3>Ofertas exclusivas</h3>
                <p>
                 Ofrecemos vuelos ilimitados a varios destinos.

                </p>
                <div class="read-more">
                  <a href="#" className="diagonal">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <i>
                  <img src="/images/project/phone.png" alt="icon" />
                </i>
                <h3>Atención al cliente 24/7
</h3>
                <p>Nuestros expertos están disponibles las 24 horas para ayudar a los viajeros.
</p>
                <div class="read-more">
                  <a href="#" className="diagonal">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <i>
                  <img src="/images/project/trust.png" alt="icon" />
                </i>
                <h3>Satisfacción del cliente</h3>
                <p>
                 Nuestro objetivo es satisfacer a nuestros clientes ofreciéndoles lo que buscan.


                </p>
                <div class="read-more">
                  <a href="#" className="diagonal">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
