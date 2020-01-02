import React, { Fragment } from "react";
import BannerInfo from "./pages/home/BannerInfo";
import BannerAbout from "./pages/home/BannerAbout";

export default function Home() {
  return (
    <Fragment>
      <BannerInfo />
      <BannerAbout />
    </Fragment>
  );
}
