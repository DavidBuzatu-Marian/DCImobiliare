import React, { Component } from "react";

export default class CardInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="col-lg-4 col-md-4 card card-cascade mb-5 mt-3 no-border p-3 background-presentation"
        id={this.props.id}
      >
        <div className="card-body card-body-cascade text-center p-3 ">
          <img
            src={`${this.props.img}`}
            className="background-card"
            width="128px"
            height="128px"
          ></img>
          <h4 className="card-title mt-3">
            <strong>{this.props.title}</strong>
          </h4>
          <p className="">{this.props.body}</p>
        </div>
      </div>
    );
  }
}
