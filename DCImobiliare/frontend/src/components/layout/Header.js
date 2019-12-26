import React, { Component } from "react";
import { Link as LinkRedirect, HashRouter as Router } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
import { HashLink as Link } from "react-router-hash-link";
import { getProperties } from "../../actions/properties";

export default class Header extends Component {
  state = {
    isHidden: false,
    homeLink: "",
    servicesLink: "",
    propertiesLink: "",
    isTransparent: true
  };

  setActiveLink = () => {
    let windowHrefSplitted = window.location.href.split("/");
    if (windowHrefSplitted.includes("properties")) {
      this.setState({ propertiesLink: "active" });
    } else if (windowHrefSplitted.includes("#services")) {
      this.setState({ servicesLink: "active" });
    } else {
      this.setState({ homeLink: "active" });
    }
  };

  hideBar = () => {
    const { isHidden } = this.state;
    window.scrollY == 0
      ? this.setState({
          isTransparent: true
        })
      : this.setState({
          isTransparent: false
        });

    window.scrollY > this.prev
      ? !isHidden &&
        this.setState({
          isHidden: true
        })
      : isHidden &&
        this.setState({
          isHidden: false
        });

    this.prev = window.scrollY;
  };

  onClick = e => {
    this.setState({
      homeLink: "",
      servicesLink: "",
      propertiesLink: ""
    });
    this.setState({ [e.target.id]: "active" });
  };

  componentDidMount() {
    this.setActiveLink();
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }

  render() {
    const { homeLink, servicesLink, propertiesLink } = this.state;
    const classHidden = this.state.isHidden ? "hidden" : "";

    const classImgVisible = this.state.isTransparent
      ? "display-gone"
      : "display-visible";
    return (
      <nav
        id="navbar"
        className={` ${classHidden} navbar navbar-expand-md navbar-light bg-light fixed-top `}
        style={{ zIndex: "1", width: "100%", border: "none" }}
      >
        <img
          className={`navbar-grand ${classImgVisible}`}
          src={"/static/logo.png"}
          alt="DCImobiliare"
          height="80px"
          width="80px"
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
              <Link
                id="servicesLink"
                smooth
                className={`nav-link ${servicesLink}`}
                to="/#services"
                onClick={this.onClick}
              >
                Servicii
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
