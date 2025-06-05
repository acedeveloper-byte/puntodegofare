import React from 'react'

const Intro = () => {
  return (
    <>
    <div id="intro" className="basic-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="text-container">
          <div className="section-title">INTRO</div>
          <h2>We Offer Some Of The Best Deals In The Business.</h2>
          <p>
          Experience unbeatable value with our exceptional deals in the travel industry. We take pride in providing some of the best offers, ensuring your journeys are not only memorable but also budget-friendly.
          </p>
          <p className="testimonial-text">
          Explore the world without compromising on quality, thanks to our commitment to delivering top-notch deals for your travel adventures.
          </p>
          {/* <div className="testimonial-author">Louise Donovan - CEO</div> */}
        </div>{" "}
        {/* end of text-container */}
      </div>{" "}
      {/* end of col */}
      <div className="col-lg-7">
        <div className="image-container">
          <img
            className="img-fluid"
            src="images/thai.jpg"
            alt="alternative"
          />
        </div>{" "}
        {/* end of image-container */}
      </div>{" "}
      {/* end of col */}
    </div>{" "}
    {/* end of row */}
  </div>{" "}
  {/* end of container */}
</div>

    
    </>
  )
}

export default Intro