import React from 'react'

const Service = () => {
  return (
    <>
    <div id="services" className="cards-2">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">SERVICES</div>
        <h2>
          Choose The Service Package
          <br /> That Suits Your Needs
        </h2>
      </div>{" "}
      {/* end of col */}
    </div>{" "}
    {/* end of row */}
    <div className="row">
     
        {/* Card */}
        
        <div className="col-md-4 card">
          <div className="card-image">
            <img
              className="img-fluid"
              src="images/singapore2.jpg"
              alt="alternative"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">"Unlock Exclusive Package of Singapore"</h3>
            <p>
            Indulge in the extraordinary with our Singapore, unlocking a world of exclusive perks and unparalleled experiences in the Lion City.
            </p>
          
            <p className="price">
              Starting at <span>$199</span>
            </p>
          </div>
          <div className="button-container">
            <a className="btn-solid-reg page-scroll" href="#callMe">
              DETAILS
            </a>
          </div>
          {/* end of button-container */}
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="col-md-4 card">
          <div className="card-image">
            <img
              className="img-fluid"
              src="images/sunset.jpg"
              alt="alternative"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">Discover the Essence of the London</h3>
            <p>
            Dive into the heart of London with our immersive guide, revealing the essence of this iconic metropolis
            </p>
         
            <p className="price">
              Starting at <span>$299</span>
            </p>
          </div>
          <div className="button-container">
            <a className="btn-solid-reg page-scroll" href="#callMe">
              DETAILS
            </a>
          </div>{" "}
          {/* end of button-container */}
        </div>
        {/* end of card */}
        {/* Card */}
        <div className="col-md-4 card">
          <div className="card-image">
            <img
              className="img-fluid"
              src="images/milan.jpg"
              alt="alternative"
            />
          </div>
          <div className="card-body">
            <h3 className="card-title">Chic Milan: Timeless Style and Elegance</h3>
            <p>
            Experience Milan's timeless style and enduring elegance, where every corner tells a story of sophistication and chic allure.
            </p>
          
            <p className="price">
              Starting at <span>$299</span>
            </p>
          </div>
          <div className="button-container">
            <a className="btn-solid-reg page-scroll" href="#callMe">
              DETAILS
            </a>
          </div>{" "}
          {/* end of button-container */}
        </div>
        {/* end of card */}
      
      {/* end of col */}
    </div>{" "}
    {/* end of row */}
  </div>{" "}
  {/* end of container */}
</div>

    
    </>
  )
}

export default Service