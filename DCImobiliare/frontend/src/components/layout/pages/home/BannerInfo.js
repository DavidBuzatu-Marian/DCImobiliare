import React, { Component } from "react";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
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
            <div className="row align-items-center h-100">
              <div className="col-lg-6 col-xl-6 buildings p-5">
                <Link
                  className="no-decoration"
                  id="servicesLink"
                  smooth
                  to="/#services"
                >
                  <span className="letter-spacing-2 text-large text-uppercase display-inline">
                    Bine ați venit la Daniel Chițu Imobiliare
                  </span>

                  <h2 className=" m-0 mt-3 font-w-700  title-extra-large text-uppercase">
                    Află mai multe despre serviciile mele
                  </h2>

                  <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
                </Link>
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
