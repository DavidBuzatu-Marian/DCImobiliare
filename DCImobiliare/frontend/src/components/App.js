import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Footer from "./layout/Footer";
import "../assets/css/default.css";
import { Properties } from "./layout/pages/properties/Properties";
import { Property } from "./layout/pages/properties/Property";
import { getProperties, getProperty } from "../actions/properties";
import lax from "lax.js";
import TermsConditions from "./layout/pages/legal/TermsConditions";
class App extends Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function(x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="h-100 left-0 position-absolute top-0 w-100">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/properties/"
                render={props => (
                  <Properties
                    {...props}
                    getProperties={getProperties}
                    properties={[]}
                  />
                )}
              />
              <Route
                exact
                path="/properties/:id"
                render={props => <Property {...props} />}
              />
              <Route
                exact
                path="/terms-and-conditions/"
                component={TermsConditions}
              />
            </Switch>
            <Footer />
          </div>
        </Fragment>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
