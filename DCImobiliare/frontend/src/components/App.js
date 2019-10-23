import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="h-100 left-0 position-absolute top-0 w-100">
          <Home />
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
