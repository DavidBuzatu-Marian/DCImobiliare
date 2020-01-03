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
      this.setState({
        propertiesLink: "active",
        servicesLink: "",
        aboutLink: "",
        homeLink: "",
        contactLink: ""
      });
    } else if (windowHrefSplitted.includes("services")) {
      this.setState({
        servicesLink: "active",
        propertiesLink: "",
        aboutLink: "",
        homeLink: "",
        contactLink: ""
      });
    } else {
      this.setState({
        homeLink: "active",
        servicesLink: "",
        aboutLink: "",
        propertiesLink: "",
        contactLink: ""
      });
    }
  };

  onClick = e => {
    this.setState({
      homeLink: "",
      servicesLink: "",
      propertiesLink: "",
      aboutLink: "",
      contactLink: ""
    });
    this.setState({ [e.target.id]: "active" });
  };

  setActiveNavbarLink = () => {
    let windowHrefSplitted = window.location.href.split("/");
    windowHrefSplitted.includes("services") ||
    windowHrefSplitted.includes("properties") ||
    windowHrefSplitted.includes("terms-and-conditions")
      ? this.setActiveLink()
      : this.setActiveNavbar(window);
  };

  setActiveNavbar(window) {
    const aboutSection = document.getElementById("aboutTitle");
    const contactSection = document.getElementById("contact");
    const servicesSection = document.getElementById("services");
    const propertiesSection = document.getElementById("properties");
    if (
      aboutSection !== null &&
      aboutSection.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      if (contactSection.getBoundingClientRect().bottom <= window.innerHeight) {
        this.setState({
          homeLink: "",
          servicesLink: "",
          propertiesLink: "",
          aboutLink: "",
          contactLink: "active"
        });
      } else {
        this.setState({
          homeLink: "",
          servicesLink: "",
          propertiesLink: "",
          aboutLink: "active",
          contactLink: ""
        });
      }
    } else {
      if (
        servicesSection !== null &&
        servicesSection.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        this.setState({
          homeLink: "",
          servicesLink: "",
          propertiesLink: "",
          aboutLink: "",
          contactLink: "active"
        });
      } else if (
        servicesSection === null &&
        propertiesSection !== null &&
        propertiesSection.getBoundingClientRect().bottom <= window.innerHeight
      ) {
        this.setState({
          homeLink: "",
          servicesLink: "",
          propertiesLink: "",
          aboutLink: "",
          contactLink: "active"
        });
      } else if (servicesSection !== null && propertiesSection === null) {
        this.setState({
          homeLink: "",
          servicesLink: "active",
          propertiesLink: "",
          aboutLink: "",
          contactLink: ""
        });
      } else if (servicesSection === null && propertiesSection !== null) {
        this.setState({
          homeLink: "",
          servicesLink: "",
          propertiesLink: "active",
          aboutLink: "",
          contactLink: ""
        });
      } else if (
        servicesSection === null &&
        propertiesSection === null &&
        aboutSection.getBoundingClientRect() <= window.innerHeight
      ) {
        this.setState({
          homeLink: "",
          servicesLink: "",
          propertiesLink: "",
          aboutLink: "active",
          contactLink: ""
        });
      } else {
        this.setState({
          homeLink: "active",
          servicesLink: "",
          propertiesLink: "",
          aboutLink: "",
          contactLink: ""
        });
      }
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
    const {
      homeLink,
      servicesLink,
      propertiesLink,
      aboutLink,
      contactLink
    } = this.state;
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
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
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
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Router>
                <LinkRedirect
                  className={`nav-link ${propertiesLink}`}
                  to="/properties"
                  onClick={this.onClick}
                  id="propertiesLink"
                >
                  Portofoliu proprietăți
                </LinkRedirect>
              </Router>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
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
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
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
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link
                id="contactLink"
                smooth
                className={`nav-link ${contactLink}`}
                to="#contact"
                onClick={this.onClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
