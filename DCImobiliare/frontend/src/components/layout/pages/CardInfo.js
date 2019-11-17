import React, { Component } from "react";

export default class CardInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-4 col-md-4 card card-cascade my-5 no-border p-3 ">
        <div className="card-body card-body-cascade text-center p-3 ">
          <h4 className="card-title">
            <strong>{this.props.title}</strong>
          </h4>
          <p className="">{this.props.body}</p>
        </div>
      </div>
    );
  }
}
