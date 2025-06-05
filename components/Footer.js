import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="contact" className="footer">
          <div className="container">
            <div className="row pdn-top-30">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <ul className="location_icon">
                  <li>
                    <a href="#">
                      <img src="icon/facebook.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="icon/Twitter.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="icon/linkedin.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="icon/instagram.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="Follow">
                  <h3>CONTACT US</h3>
                  <span>
                    <h6>Registered Address:</h6>
                    <span>
                      Registered Agents Inc <br />
                      30 N Gould St Ste R,
                      <br />
                      Sheridan, WY 82801
                      <br />
                    </span>
                    <br />
                    <a href="tel:+1-(888)-279-9809">+1(888)-279-9809</a>
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="Follow">
                  <h3>ADDITIONAL LINKS</h3>
                  <ul className="link">
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms and conditions</Link>
                    </li>
                    <li>
                      <Link href="/privacy"> Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="/cancellation">Cancellation Policy</Link>
                    </li>
                    <li>
                      <Link href="/refund">Refund Policy</Link>
                    </li>
                    <li>
                      <Link href="/contact"> Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="Follow">
                  <h3>Contact</h3>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <input
                        className="Newsletter"
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <input
                        className="Newsletter"
                        placeholder="Email"
                        type="text"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <textarea
                        className="textarea"
                        placeholder="comment"
                        type="text"
                        defaultValue={"Comment"}
                      />
                    </div>
                  </div>
                  <button className="Subscribe">Submit</button>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <p>
                  Copyright 2024 All Right Reserved By
                  <a href="#"> Book Easy Vacations</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
