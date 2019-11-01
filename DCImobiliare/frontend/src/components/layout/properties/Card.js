import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProperty } from "../../../actions/properties";
export default class Card extends Component {
  state = {
    property: {},
    date: [],
    details: "",
    price: 0
  };

  componentDidMount() {
    const fullDate = this.props.property.created_at;
    const details = this.props.property.details;
    const price = this.props.property.price;
    this.setState({
      property: this.props.property,
      date: fullDate.split("T"),
      details: details.substring(0, 256) + "...",
      price: price.toLocaleString()
    });
  }

  render() {
    const property = this.state.property;
    const details = this.state.details;
    const price = this.state.price;
    return (
      <Link
        to={`/properties/${property.id}`}
        className="col-12 card card-cascade narrower mt-5 p-3 mb-1 bg-white rounded"
        style={{
          maxWidth: "768px",
          cursor: "pointer",
          textDecoration: "none"
        }}
        onClick={this.onClick}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="view view-cascade ">
              <img
                className="card-img-top"
                src={property.image_presentation}
                alt="Card image cap"
                width="256px"
                height="256px"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>{property.title}</strong>
              </h4>
              <p className="card-text">{details}</p>
              <div className="row mt-5 px-3">
                <div className="col-8">
                  <h5 className="blue-text pb-2 price-font">
                    <strong> {price} EUR</strong>
                  </h5>
                </div>
                <div className="col-4">
                  <button type="button" className="btn btn-info btn-md">
                    Mai multe
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card-footer text-muted text-center mt-4">
          {this.state.date[0]}
        </div> */}
        </div>
      </Link>
    );
  }
}
