import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="about mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="titlepage" data-aos="fade-in">
              <h3>About our travel agency</h3>
              <span>
                Are you in need of a particular airline's contact number? Look
                no further, as we're ready to assist you with both domestic and
                international flights. Our dedicated flight team helpline is at
                your service, offering support for booking flights, modifying
                reservations, or handling cancellations at special discounted
                rates. Our goal is to deliver outstanding service, ensuring you
                not only save money but also enjoy the finest travel experience
                possible. Reach out to us today, and you won't be let down.
              </span>
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
