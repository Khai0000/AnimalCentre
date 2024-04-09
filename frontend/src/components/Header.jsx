import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/ANIMALCENTRE.svg";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom header">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img
              src={logo}
              className="bi me-2"
              width="100"
              height="80"
              alt="Logo"
            />
            <span
              className="fs-4"
              style={{ fontWeight: "bold"}}
            >
              AnimalCentre
            </span>
          </NavLink>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="news" className="nav-link">
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="initiatives" className="nav-link">
                Initiative
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="events" className="nav-link">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/partnerships" className="nav-link">
                Partnership
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </header>
  );
};
