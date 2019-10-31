import React, { Component } from "react";

export default class Card extends Component {
  state = {
    property: {},
    date: [],
    details: ""
  };

  componentDidMount() {
    const fullDate = this.props.property.created_at;
    const details = this.props.property.details;
    this.setState({
      property: this.props.property,
      date: fullDate.split("T"),
      details: details.substring(0, 256) + "..."
    });
  }
  render() {
    return (
      <div
        className="col-12 card card-cascade narrower mt-5 mb-5 "
        style={{ maxWidth: "768px" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <div className="view view-cascade ">
              <img
                className="card-img-top"
                src={this.state.property.image_presentation}
                alt="Card image cap"
                width="256px"
                height="256px"
              />
              <a>
                <div className="mask img-gradient"></div>
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>{this.state.property.title}</strong>
              </h4>
              <h5 className="blue-text pb-2">
                <strong> {this.state.property.price} EUR</strong>
              </h5>
              <p className="card-text">{this.state.details}</p>
              <button type="button" className="btn btn-info btn-md">
                Read more
              </button>
            </div>
          </div>
          {/* <div className="card-footer text-muted text-center mt-4">
          {this.state.date[0]}
        </div> */}
        </div>
      </div>
    );
  }
}
