import React, { Fragment } from "react";
import BannerInfo from "./pages/home/BannerInfo";
import BannerServices from "./components/BannerServices";

export default function Home() {
  return (
    <Fragment>
      <BannerInfo />
      <BannerServices />
    </Fragment>
  );
}
