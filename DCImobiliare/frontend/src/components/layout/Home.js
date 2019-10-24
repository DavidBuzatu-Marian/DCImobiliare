import React, { Fragment } from "react";
import BannerInfo from "./pages/BannerInfo";
import "../../assets/css/firstSector.css";
import BannerServices from "./pages/BannerServices";
import Footer from "./Footer";

export default function Home() {
  return (
    <Fragment>
      <BannerInfo />
      <BannerServices />
      <Footer />
    </Fragment>
  );
}
