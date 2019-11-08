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
        <div className="bg-parallax bg-overlay-black-8 "></div>

        <div className="h-100 left-0 top-0 w-100 background-full-width-section1">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <Link
                className="no-decoration"
                id="servicesLink"
                smooth
                to="/#services"
              >
                <div className="col-lg-9 col-xl-9">
                  <span
                    className="letter-spacing-2 text-large text-uppercase"
                    style={{ color: "#FFFFFF" }}
                  >
                    Bine ați venit la Daniel Chițu Imobiliare
                  </span>

                  <h2
                    className=" m-0 mt-3 font-w-700  title-extra-large text-uppercase text-white"
                    style={{ color: "#FFFFFF" }}
                  >
                    Află mai multe despre serviciile mele
                  </h2>

                  <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
