import React, { Component } from "react";
import lax from "lax.js";
import ReactDOM from "react-dom";

export default class Title extends Component {
  componentDidMount() {
    this.el = ReactDOM.findDOMNode(this);
    lax.addElement(this.el);
  }

  componentWillUnmount() {
    lax.removeElement(this.el);
  }
  render() {
    return (
      <div
        className=" text-center lax line "
        data-lax-translate-y={`0 0, 400 ${this.props.yValue}`}
        data-lax-anchor={this.props.anchor}
      >
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
