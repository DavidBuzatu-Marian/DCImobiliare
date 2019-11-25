import React, { Component } from "react";
import { Form } from "./Form";
import { sendEmail } from "../../../actions/emails";
import { Link as LinkRedirect, HashRouter as Router } from "react-router-dom";
import BannerTableServices from "../pages/home/BannerTableServices";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import CardInfo from "../components/CardInfo";

export default class BannerServices extends Component {
  render() {
    return (
      <section
        id={"services"}
        className="overflow-hidden p-0 w-100 inline-block"
        style={{ marginTop: "-6px !important" }}
      >
        <Zoom>
          <h2 className=" m-0 mt-3 font-w-700 text-uppercase title-very-large text-center p-3 my-5">
            Ce beneficii vă aduc serviciile mele?
          </h2>
          <BannerTableServices></BannerTableServices>
        </Zoom>
        <Fade>
          <h2 className="font-w-1000 text-uppercase title-very-large text-center p-3 my-3">
            Despre mine
          </h2>
          <div className="container">
            <div className="row">
              <CardInfo
                title={"Some Title"}
                body={
                  "OEtiam bibendum congue aliquet. Nam auctor sodales massa, in maximus sapien interdum vel. Phasellus consectetur elementum cursus. Vivamus et vulputate eros. Donec at finibus nisl."
                }
              ></CardInfo>
              <CardInfo
                title={"Ce spun clientii despre mine"}
                body={"Text pompos despre serviciile mele"}
              ></CardInfo>
              <CardInfo
                title={"Another Title"}
                body={
                  "Vivamus et facilisis velit, in elementum urna. Sed feugiat interdum nibh sit amet vestibulum. Nam malesuada pellentesque orci, eu imperdiet velit ultrices a. Quisque posuere elementum massa, at elementum nibh porttitor sit amet. "
                }
              ></CardInfo>
              <CardInfo
                title={"Some Title"}
                body={
                  "OEtiam bibendum congue aliquet. Nam auctor sodales massa, in maximus sapien interdum vel. Phasellus consectetur elementum cursus. Vivamus et vulputate eros. Donec at finibus nisl."
                }
              ></CardInfo>
              <CardInfo
                title={"Ce spun clientii despre mine"}
                body={"Text pompos despre serviciile mele"}
              ></CardInfo>
              <CardInfo
                title={"Another Title"}
                body={
                  "Vivamus et facilisis velit, in elementum urna. Sed feugiat interdum nibh sit amet vestibulum. Nam malesuada pellentesque orci, eu imperdiet velit ultrices a. Quisque posuere elementum massa, at elementum nibh porttitor sit amet. "
                }
              ></CardInfo>
            </div>
          </div>
        </Fade>
        <Zoom>
          <div className="bg-parallax bg-overlay-black-8 "></div>

          <div className="h-100 left-0 top-0 w-100 background-full-width-section2">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 col-xl-7 col-sm-12 col-md-12 col-xs-12 text-center-md">
                <h2
                  className=" m-0 mt-3 font-w-700 text-uppercase text-white title-very-large text-center text-motivation"
                  style={{ color: "#FFFFFF" }}
                >
                  Mesaj scurt convingator
                </h2>
              </div>
              <div className="col-lg-5 col-xl-4 col-md-8 col-sm-8 col-xs-8 mt-5 shadow p-3 mb-5 bg-white rounded margin-auto-md">
                <Form sendEmail={sendEmail} />
              </div>
              <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
            </div>
          </div>
        </Zoom>
      </section>
    );
  }
}
