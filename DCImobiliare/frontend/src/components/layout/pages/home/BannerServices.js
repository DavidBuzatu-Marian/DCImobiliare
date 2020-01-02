import React, { Component } from "react";
import BannerTableServices from "./BannerTableServices";

import Title from "../../components/Title";
import CardForm from "../../components/CardForm";

export default class BannerServices extends Component {
  render() {
    return (
      <section id={"services"} className=" p-0 w-100 inline-block mt-10">
        <Title
          title="Serviciile mele"
          yValue="100"
          customID="servicesTitle"
        ></Title>
        <BannerTableServices
          yValue="100"
          anchor="#servicesTitle"
        ></BannerTableServices>

        <div className="h-100 left-0 top-0 w-100 background-full-width-section2 mt-3">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 col-xl-7 col-sm-12 col-md-12 col-xs-12 text-center-md">
              <Title
                title="Servicii profesioniste, la comisioane mai mici"
                anchor="#form-toggle"
                textColor="text-white"
                yValue="100"
              ></Title>
            </div>
            <CardForm anchor="#form-toggle"></CardForm>
            <span className="bg-base-color d-block mt-4 sep-line-extra-thick-long"></span>
          </div>
        </div>
      </section>
    );
  }
}
