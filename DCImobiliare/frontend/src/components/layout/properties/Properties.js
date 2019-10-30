import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProperties } from "../../../actions/properties";
import axios from "axios";
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
          <div className="h-100 overflow-hidden p-0 w-100 d-inline-block">
            <div className="bg-parallax bg-overlay-black-8 "></div>

            <div className="h-100 left-0 top-0 w-100">
              <div className="container h-100">
                <div className="row align-items-center h-100">
                  {this.state.properties.map(property => (
                    <div
                      key={property.id}
                      className="card mb-3"
                      style={{ maxWidth: "540px" }}
                    >
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img
                            src={property.image_presentation}
                            className="card-img"
                            alt="Image"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{property.title}</h5>
                            <p className="card-text">{property.details}</p>
                            <p className="card-text">
                              <small className="text-muted">
                                {property.price}
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
