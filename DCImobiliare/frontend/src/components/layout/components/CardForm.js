import React, { Component } from "react";
import { Form } from "./Form";
import { sendEmail } from "../../../actions/emails";
export default class CardForm extends Component {
  render() {
    return (
      <div className="col-lg-5 col-xl-4 col-md-8 col-sm-8 col-xs-8 mt-5 shadow p-3 mb-5 bg-white rounded margin-auto-md margin-top-md p-5-sm m-x-sm">
        <Form sendEmail={sendEmail} anchor="#form-toggle" />
      </div>
    );
  }
}
