import React, { Component } from "react";

export default class BannerInfo extends Component {
  render() {
    return (
      <section
        id="home-bg-parallax"
        className="h-100 overflow-hidden p-0 w-100 d-inline-block"
      >
        <div className="bg-parallax bg-overlay-black-8 "></div>

        <div
          className="h-100 left-0 top-0 w-100"
          style={{
            backgroundImage: `url("/static/background.jpg")`,
            backgroundPosition: "center center !important",
            backgroundRepeat: "no-repeat !important",
            backgroundSize: "cover !important"
          }}
        >
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <a href="#" style={{ textDecoration: "none" }}>
                <div className="col-lg-9 col-xl-9">
                  <span
                    className="letter-spacing-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    Bine ați venit la DCImobiliare
                  </span>

                  <h2
                    className=" m-0 mt-3 title-xs-extra-large title-sm-extra-large-3 title-extra-large-4 text-uppercase text-white title-xs-extra-large title-sm-extra-large-3 title-extra-large-4"
                    style={{ color: "#FFFFFF" }}
                  >
                    Află mai multe despre serviciile mele
                  </h2>

                  <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
                </div>
              </a>
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
