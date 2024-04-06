import React from "react";
import logo from "../assets/images/AnimalCENTRE.svg";
import '../styles/Header.css';

export const Header = () => {
  return (
    <header>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img src={logo} class="bi me-2" width="70" height="60"  />
            <span class="fs-4" style={{ fontWeight: "bold" }}>
              AnimalCentre
            </span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>
    </header>
  );
};
