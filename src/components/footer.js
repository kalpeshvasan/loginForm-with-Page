import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import footerlogo from "../images/logo-white.png";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="footer-awarad">
                <img src={footerlogo} alt="Footer Logo" />
                <p>Best Company 2020</p>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget footer-left-widget">
                    <div className="section-heading">
                      <h3>Useful Links</h3>
                      <span className="animate-border border-black"></span>
                    </div>
                    <ul>
                      <li>
                        <Link href="">About us</Link>
                      </li>
                      <li>
                        <Link href="">Products</Link>
                      </li>
                      <li>
                        <Link href="">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="">Blog</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="">Services</Link>
                      </li>
                      <li>
                        <Link href="">Faq</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="footer-widget">
                    <div className="section-heading">
                      <h3>Conatct Us</h3>
                      <span className="animate-border border-black"></span>
                      <div className="contact-us">
                        <div className="contact-icon">
                          <i className="fa fa-map-o" aria-hidden="true"></i>
                        </div>
                        <div className="contact-info">
                          <h3>Jaipur India</h3>
                          <p>5353 Road Avenue</p>
                        </div>
                      </div>

                      <div className="contact-us contact-us-last">
                        <div className="contact-icon">
                          <i
                            className="fa fa-volume-control-phone"
                            aria-hidden="true"
                          ></i>
                        </div>

                        <div className="contact-info">
                          <h3>95 711 9 5353</h3>
                          <p>Give us a call</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <span>Copyright © 2019, All Right Reserved Terina</span>
              </div>
              <div className="col-md-6">
                <div className="copyright-menu">
                  <ul>
                    <li>
                      <Link href="">Terms</Link>
                    </li>
                    <li>
                      <Link href="">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
