import React, { Component } from "react";
import { Form } from "./Form";
import { sendEmail } from "../../../actions/emails";
import { Link as LinkRedirect, HashRouter as Router } from "react-router-dom";
import BannerTableServices from "./BannerTableServices";

export default class BannerServices extends Component {
  render() {
    return (
      <section
        id={"services"}
        className="overflow-hidden p-0 w-100 inline-block"
        style={{ marginTop: "-6px !important" }}
      >
        <div className="bg-parallax bg-overlay-black-8 "></div>

        <div className="h-100 left-0 top-0 w-100 background-full-width-section2">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12 col-xs-12 text-center-md">
                <h2
                  className=" m-0 mt-3 font-w-700 text-uppercase text-white title-very-large"
                  style={{ color: "#FFFFFF" }}
                >
                  Vrei să cumperi?
                </h2>
                <Router>
                  <LinkRedirect to="/properties" id="propertiesLink">
                    <button className="btn btn-info btn-shadow btn-lg mt-2">
                      Vezi lista de oferte
                    </button>
                  </LinkRedirect>
                </Router>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 mt-5 align-items-right shadow p-3 mb-5 bg-white rounded">
                <Form sendEmail={sendEmail} />
              </div>
              <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
            </div>
          </div>
        </div>
        <BannerTableServices></BannerTableServices>
      </section>
    );
  }
}
