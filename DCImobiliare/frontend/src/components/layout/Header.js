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
    propertiesLink: ""
  };

  hideBar = () => {
    const { isHidden } = this.state;

    window.scrollY > this.prev
      ? !isHidden && this.setState({ isHidden: true })
      : isHidden && this.setState({ isHidden: false });

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
    window.addEventListener("scroll", this.hideBar);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.hideBar);
  }
  render() {
    const { homeLink, servicesLink, propertiesLink } = this.state;
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
                id="homeLink"
                smooth
                className={`nav-link ${homeLink}`}
                to="/#home"
                onClick={this.onClick}
              >
                Acasă <span className="sr-only">(current)</span>
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
                Vinde/ Închiriază
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
