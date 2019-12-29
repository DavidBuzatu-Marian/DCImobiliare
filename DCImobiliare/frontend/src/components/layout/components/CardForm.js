import React, { Component } from "react";
import lax from "lax.js";
import ReactDOM from "react-dom";
import { Form } from "./Form";
import { sendEmail } from "../../../actions/emails";
export default class CardForm extends Component {
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
        className="col-lg-5 col-xl-4 col-md-8 col-sm-8 col-xs-8 mt-5 shadow p-3 mb-5 bg-white rounded margin-auto-md margin-top-md"
        data-lax-translate-y="0 0, 400 -50"
        data-lax-anchor={this.props.anchor}
      >
        <Form sendEmail={sendEmail} anchor="#form-toggle" />
      </div>
    );
  }
}
