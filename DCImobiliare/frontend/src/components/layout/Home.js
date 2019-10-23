import React, { Fragment } from "react";
import BannerInfo from "./pages/BannerInfo";
import BannerServices from "./pages/BannerServices";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Fragment>
        <BannerInfo />
        <BannerServices />
        <Footer />
      </Fragment>
    </div>
  );
}
