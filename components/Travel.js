import React from "react";

const Travel = () => {
  return (
    <>
      <div id="travel" class="traveling">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ">
              <div class="titlepage">
                <h2>Select Offers For Traveling</h2>
                <span>
                  Discover unbeatable travel deals! Select exclusive offers for
                  your journey and embark on unforgettable adventures without
                  breaking the bank.
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <img src="/images/project/flight.png" alt="icon" />
                <h3>Simple Booking</h3>
                <p>Book online within minutes or text / call us instead</p>
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
                <h3>Affordable Price</h3>
                <p>
                  We offer the lowest discounts on flights and all other travel
                  needs
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
                <h3>24/7 Support</h3>
                <p>24/7 travel advisors for all your needs.</p>
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
                <h3>Top Rated</h3>
                <p>
                  Read trusted reviews on Google and Trustpilot from real
                  travelers
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
