import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div id={this.props.customID} className=" text-center ">
        <h2
          className={`font-w-700 text-uppercase title-table text-center ${this.props.textColor}`}
        >
          {this.props.title}
        </h2>
        <div className="bar-limitator mb-5"></div>
      </div>
    );
  }
}
