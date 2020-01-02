import React, { Component } from "react";
import { Link as LinkRedirect, HashRouter as Router } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
import { HashLink as Link } from "react-router-hash-link";

export default class Header extends Component {
  state = {
    homeLink: "",
    servicesLink: "",
    propertiesLink: "",
    aboutLink: ""
  };

  setActiveLink = () => {
    let windowHrefSplitted = window.location.href.split("/");
    if (windowHrefSplitted.includes("properties")) {
      this.setState({ propertiesLink: "active" });
    } else if (windowHrefSplitted.includes("services")) {
      this.setState({ servicesLink: "active" });
    } else {
      this.setState({ homeLink: "active" });
    }
  };

  onClick = e => {
    this.setState({
      homeLink: "",
      servicesLink: "",
      propertiesLink: "",
      aboutLink: ""
    });
    this.setState({ [e.target.id]: "active" });
  };

  setActiveNavbarLink = () => {
    let windowHrefSplitted = window.location.href.split("/");
    windowHrefSplitted.includes("terms-and-conditions") ||
    windowHrefSplitted.includes("properties")
      ? this.setActiveLink()
      : this.setActiveNavbar(window);
  };

  setActiveNavbar(window) {
    const servicesSection = document.getElementById("servicesTitle");
    const aboutSection = document.getElementById("aboutTitle");
    if (
      servicesSection !== null &&
      servicesSection.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      if (
        aboutSection !== null &&
        aboutSection.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        this.setState({
          homeLink: "",
          servicesLink: "",
          propertiesLink: "",
          aboutLink: "active"
        });
      } else {
        this.setState({
          homeLink: "",
          servicesLink: "active",
          propertiesLink: "",
          aboutLink: ""
        });
      }
    } else {
      this.setState({
        homeLink: "active",
        servicesLink: "",
        propertiesLink: "",
        aboutLink: ""
      });
    }
  }

  componentDidMount() {
    this.setActiveLink();
    window.addEventListener("scroll", this.setActiveNavbarLink);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.setActiveNavbarLink);
  }

  render() {
    const { homeLink, servicesLink, propertiesLink, aboutLink } = this.state;
    return (
      <nav
        id="navbar"
        className="navbar navbar-expand-md navbar-light bg-light fixed-top p-3"
        style={{ zIndex: "1", width: "100%", border: "none" }}
      >
        <img
          className="navbar-grand "
          src={"/static/logo.png"}
          alt="DCImobiliare"
          height="64px"
          width="64px"
        />

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
                id="homeLink"
                smooth
                className={`nav-link ${homeLink}`}
                to="/#home"
                onClick={this.onClick}
              >
                Acasă
              </Link>
            </li>
            <li className="nav-item">
              <Router>
                <LinkRedirect
                  className={`nav-link ${servicesLink}`}
                  to="/services"
                  onClick={this.onClick}
                  id="servicesLink"
                >
                  Servicii
                </LinkRedirect>
              </Router>
            </li>
            <li className="nav-item">
              <Link
                id="aboutLink"
                smooth
                className={`nav-link ${aboutLink}`}
                to="/#aboutTitle"
                onClick={this.onClick}
              >
                Despre
              </Link>
            </li>
            <li className="nav-item">
              <Router>
                <LinkRedirect
                  className={`nav-link ${propertiesLink}`}
                  to="/properties"
                  onClick={this.onClick}
                  id="propertiesLink"
                >
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
