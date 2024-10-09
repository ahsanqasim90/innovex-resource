import React from "react";
import innovex2 from "../images/innovex2.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid bg-light">
      {" "}
      {/* Ensure full width responsiveness */}
      <footer className="py-5">
        <div className="row">
          <div className="col-12 col-md-2 mb-3 d-flex justify-content-center justify-content-md-start">
            {" "}
            {/* Center on small screens */}
            <img
              src={innovex2}
              className="img-fluid"
              alt="Innovex Logo"
              style={{ maxWidth: "10rem", height: "8rem" }}
            />{" "}
            {/* Use img-fluid for responsive image */}
          </div>

          <div className="col-12 col-md-2 mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li>
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="nav-link p-0 text-dark"
                  style={{ cursor: "pointer" }}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link p-0 text-dark"
                  style={{ cursor: "pointer" }}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  className="nav-link p-0 text-dark"
                  style={{ cursor: "pointer" }}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="process"
                  smooth={true}
                  duration={500}
                  className="nav-link p-0 text-dark"
                  style={{ cursor: "pointer" }}
                >
                  Our Process
                </ScrollLink>
              </li>
              <li>
                <RouterLink to="/contact" className="nav-link p-0 text-dark" style={{ cursor: "pointer" }}>
                  Contact
                </RouterLink>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-2 mb-3">
            <h5>Contact Details</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="tel:+44330437830" className="nav-link p-0 text-dark">
                  <i className="fa-solid fa-phone me-2"></i> +44 3304 37830
                </a>
              </li>
              <li className="nav-item mb-2 d-flex align-items-center">
                <a
                  href="mailto:info@innovexresourcegroup.co.uk"
                  className="nav-link p-0 text-dark"
                  style={{ whiteSpace: "nowrap", width: "100%" }}
                >
                  <i className="fa-regular fa-envelope fa-2x me-2"></i>{" "}
                  info@innovexresourcegroup.co.uk
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-dark">
                  <i className="fa-solid fa-location-dot me-2"></i>
                  33 Forsythia Drive, Cardiff, Wales CF23 7HP
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>
            © 2024 INNOVEX RESOURCE GROUP LIMITED, Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="https://www.facebook.com/profile.php?id=61566587935583" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href=" https://www.linkedin.com/company/innovex-resource-group" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="https://www.instagram.com/irg__ltd?igsh=aHJvdnVkNGh6empj&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;