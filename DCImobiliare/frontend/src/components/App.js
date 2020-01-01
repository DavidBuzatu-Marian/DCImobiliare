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
import { createBrowserHistory } from "history";
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
    const history = createBrowserHistory();

    history.listen(_ => {
      window.scrollTo(0, 0);
    });
    return (
      <Router>
        <Fragment>
          <Header />
          <div className="h-100 left-0 position-absolute top-0 w-100">
            <Switch>
              <Route exact path="/" component={Home} history={history} />
              <Route
                history={history}
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
                history={history}
                exact
                path="/properties/:id"
                render={props => <Property {...props} />}
              />
              <Route
                history={history}
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
