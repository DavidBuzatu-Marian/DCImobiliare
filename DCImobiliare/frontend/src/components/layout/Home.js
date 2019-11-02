import React, { Fragment } from "react";
import BannerInfo from "./pages/BannerInfo";
import BannerServices from "./pages/BannerServices";

export default function Home() {
  return (
    <Fragment>
      <BannerInfo />
      <BannerServices />
    </Fragment>
  );
}
