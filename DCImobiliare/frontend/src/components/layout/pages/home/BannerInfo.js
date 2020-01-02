import React, { Component } from "react";
import { Link as LinkRedirect, HashRouter as Router } from "react-router-dom";

export default class BannerInfo extends Component {
  render() {
    return (
      <section
        id="home"
        className="h-100 overflow-hidden p-0 w-100 d-inline-block"
      >
        <div className="bg-clouds bg-overlay-black-8 "></div>
        <div className="bg-clouds2 bg-overlay-black-8 "></div>
        <div className="h-100 left-0 top-0 w-100 background-full-width-section1">
          <div className="h-100">
            <div className="row align-items-center hv-100">
              <div className="col-lg-6 col-xl-6 buildings p-5">
                <span className="m-0 mt-3 font-w-700  title-extra-large text-uppercase">
                  Bine ai venit
                </span>

                <h2 className="letter-spacing-2 text-large text-uppercase mt-4 ml-2">
                  Cu ce te pot ajuta?
                </h2>

                <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
                <Router>
                  <LinkRedirect
                    className="btn btn-sell-services mt-3 mx-1 btn-shadow-custom"
                    to="/services"
                  >
                    Vreau să vând/ dau în chirie
                  </LinkRedirect>
                </Router>
                <Router>
                  <LinkRedirect
                    className="btn btn-sell-services mt-3 mx-1 btn-shadow-custom"
                    to="/properties"
                  >
                    Vreau să cumpăr/ închiriez
                  </LinkRedirect>
                </Router>
              </div>
              <div className="col-lg-6 col-xl-6 buildings-bkg">
                <img src="/static/buildings-bkg.svg"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
