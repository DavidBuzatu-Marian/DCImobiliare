import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./layout/Header";
import BannerInfo from "./layout/BannerInfo";
import BannerServices from "./layout/BannerServices";
import Footer from "./layout/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="h-100 left-0 position-absolute top-0 w-100">
          <BannerInfo />
          <BannerServices />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
