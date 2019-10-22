import React, { Component } from "react";
import "../../assets/css/firstSector.css";
import { Form } from "./Form";

export default class BannerInfo extends Component {
  render() {
    return (
      <section
        id="services-bg-parallax"
        className="overflow-hidden p-0 w-100 -inline-block"
        style={{ marginTop: "-6px !important" }}
      >
        <div className="bg-parallax bg-overlay-black-8 "></div>

        <div className="h-100 left-0 top-0 w-100 background-full-width-section2">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 col-xl-6 col-sm-12 col-md-12 col-xs-12">
                <a href="#" style={{ textDecoration: "none" }}>
                  {/* <span
                    className="letter-spacing-2 text-large text-uppercase"
                    style={{ color: "#FFFFFF" }}
                  >
                    Interesat de ofertele mele?
                  </span> */}

                  <h2
                    className=" m-0 mt-3 font-w-700 text-uppercase text-white title-very-large"
                    style={{ color: "#FFFFFF" }}
                  >
                    Vezi lista curentă de vânzări și închirieri
                  </h2>
                </a>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12 mt-5 align-items-right shadow p-3 mb-5 bg-white rounded">
                <Form />
              </div>
              <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
            </div>
          </div>
        </div>
      </section>

      //   <div className={rootStyle}>
      //     <div className={centerFit}>
      //       <a href="#">
      //         <img
      //           className={imgbox}
      //           src={"/static/about.png"}
      //           alt="DCImobiliare"
      //         />
      //       </a>
      //     </div>
      //     <a href="#">
      //       <img src={"/static/about.png"} alt="DCImobiliare" />
      //     </a>
      //   </div>
    );
  }
}
