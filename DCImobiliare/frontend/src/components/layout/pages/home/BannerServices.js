import React, { Component } from "react";
import { Form } from "../../components/Form";
import { sendEmail } from "../../../../actions/emails";
import { Link as LinkRedirect, HashRouter as Router } from "react-router-dom";
import BannerTableServices from "./BannerTableServices";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import CardInfo from "../../components/CardInfo";

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
            Despre
          </h2>
          <div className="container">
            <div className="row">
              <CardInfo
                title={"Despre mine"}
                body={
                  "Sunt un tânăr ambițios, disciplinat, orientat către rezultate și pasionat de lumea antreprenoriatului."
                }
                img={"/static/manager.svg"}
              ></CardInfo>
              <CardInfo
                title={"Experiență"}
                body={
                  "Am facut parte din singura agenție arădeană care a fost nominalizată la Gala Profesioniștilor în Imobiliare pentru premiul de investiție continuă în profesionalism."
                }
                img={"/static/award.svg"}
              ></CardInfo>
              <CardInfo
                title={"De ce Daniel Chițu Imobiliare?"}
                body={
                  "Eu vă pot oferi aceleași servicii profesioniste ale agențiilor mari, dar la comisioane mult mai accesibile"
                }
                img={"/static/deal.svg"}
              ></CardInfo>
              <CardInfo
                title={"Voluntariate"}
                body={
                  "În timpul liber sunt implicat în voluntariate și dețin titlul de președinte al unei organizații de tineri. Dorința de a ajuta m-a atras și în domeniul imobiliarelor, pentru a ajuta oamenii să-și vândă proprietățile fără stres, mai rapid și cu benefici mai multe"
                }
                img={"static/volunteer.svg"}
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
