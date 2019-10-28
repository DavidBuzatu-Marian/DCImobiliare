import React, { Component } from "react";
import { Link as LinkRedirect, HashRouter as Router } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { getProperties } from "../../actions/properties";

export default class Header extends Component {
  state = { isHidden: false };

  hideBar = () => {
    const { isHidden } = this.state;

    window.scrollY > this.prev
      ? !isHidden && this.setState({ isHidden: true })
      : isHidden && this.setState({ isHidden: false });

    this.prev = window.scrollY;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }
  render() {
    const classHidden = this.state.isHidden ? "hidden" : "";
    return (
      <nav
        id="navbar"
        className={` ${classHidden} navbar navbar-expand-sm navbar-light bg-light fixed-top`}
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
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Acasă <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Vinde/ Închiriază
              </Link>
            </li>
            <li className="nav-item">
              <Router>
                <LinkRedirect className="nav-link" to="/properties">
                  Cumpără/ Închiriază
                </LinkRedirect>
              </Router>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
