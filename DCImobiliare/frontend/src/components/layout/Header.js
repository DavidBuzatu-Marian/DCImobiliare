import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
        style={{ zIndex: "1", width: "100%" }}
      >
        <a className="navbar-brand" href="#">
          <img
            src={"/static/logo.png"}
            alt="DCImobiliare"
            height="80px"
            width="80px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Acasă <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services-bg-parallax">
                Cumpără/ Închiriază
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}