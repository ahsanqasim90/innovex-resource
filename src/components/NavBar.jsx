

import React from "react";
import logo from "../images/innovex2.png"; // Ensure this path is correct
import { Link as ScrollLink } from "react-scroll"; // Rename Link from react-scroll
import { Link as RouterLink } from "react-router-dom"; // Rename Link from react-router-dom

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ height: "60px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Services
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="process"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Our Process
              </ScrollLink>
            </li>
            <li className="nav-item">
              <RouterLink
                to="/contact"
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


/*
<nav class="navbar navbar-dark bg-dark" aria-label="First navbar example">
    <div class="container-fluid" bis_skin_checked="1">
      <a class="navbar-brand" href="#">Never expand</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample01" bis_skin_checked="1">
        <ul class="navbar-nav me-auto mb-2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form role="search">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>
*/