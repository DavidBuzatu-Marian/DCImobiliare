import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProperties } from "../../../actions/properties";
import "../../../assets/css/properties.css";
import axios from "axios";
import Card from "./Card";

export class Properties extends Component {
  state = {
    isLoading: true,
    properties: []
  };

  static propTypes = {
    getProperties: PropTypes.func.isRequired
  };

  componentDidMount() {
    axios
      .get("/api/properties")
      .then(res => {
        console.log(res.data);
        this.setState({
          isLoading: false,
          properties: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
    return (
      <Fragment>
        <h2>Offers</h2>
        {this.state.isLoading ? (
          loadingMessage
        ) : (
          // <div className="p-0 w-100 d-inline-block">
          //   <div className="bg-parallax bg-overlay-black-8 "></div>
          //   <div className="left-0 top-0">
          <div className="container" style={{ marginTop: "120px" }}>
            <div className="row align-items-center">
              {this.state.properties.map(property => (
                <Card key={property.id} property={property}></Card>
              ))}
            </div>
          </div>
          //   </div>
          // </div>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  properties: state.properties.properties
});

export default connect(
  mapStateToProps,
  { getProperties }
)(Properties);
