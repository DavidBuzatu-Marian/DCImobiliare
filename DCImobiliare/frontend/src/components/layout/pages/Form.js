import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmail, validateForm } from "../../../actions/emails";
import DjangoCSRFToken from "django-react-csrftoken";

export class Form extends Component {
  state = {
    name: "",
    pNumber: "",
    email: "",
    message: "",
    formErrors: { email: "", name: "", pNumber: "", message: "" },
    emailValid: false,
    nameValid: false,
    pNumberValid: false,
    messageValid: false,
    formValid: false
  };
  static propTypes = {
    sendEmail: PropTypes.func.isRequired
  };

  onChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.validateField(e.target.name, e.target.value);
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, pNumber, email, message } = this.state;
    const emailContent = { name, pNumber, email, message };
    this.props.sendEmail(emailContent);
    this.setState({
      name: "",
      pNumber: "",
      email: "",
      message: "",
      formErrors: { email: "", name: "", pNumber: "", message: "" },
      emailValid: false,
      nameValid: false,
      pNumberValid: false,
      messageValid: false,
      formValid: false
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let pNumberValid = this.state.pNumberValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "name":
        nameValid = value.length > 0 && !value.includes("\n");
        fieldValidationErrors.name = nameValid ? "" : " field is empty";
        break;
      case "pNumber":
        pNumberValid =
          !isNaN(value) && value.length == 10 && !value.includes("\n");
        fieldValidationErrors.pNumber = pNumberValid ? "" : " field is empty";
        break;
      case "message":
        messageValid = value.length > 0;
        fieldValidationErrors.message = messageValid ? "" : " field is empty";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        pNumberValid: pNumberValid,
        messageValid: messageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.pNumberValid &&
        this.state.emailValid &&
        this.state.nameValid &&
        this.state.pNumberValid &&
        this.state.messageValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  render() {
    const { name, pNumber, email, message } = this.state;
    return (
      <form
        className="text-center border border-light p-5 bodyForm"
        onSubmit={this.onSubmit}
      >
        <DjangoCSRFToken />
        <p className="h4 mb-4">Interesat de ofertele mele?</p>

        <p>Completează toate câmpurile dacă dorești să fii contactat</p>
        <div className="form-group">
          <input
            type="text"
            id="infoFormName"
            className={`form-control mb-4
            ${this.errorClass(this.state.formErrors.name)}`}
            placeholder="Nume*"
            name="name"
            value={name}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="infoFormEmail"
            className={`form-control mb-4
            ${this.errorClass(this.state.formErrors.email)}`}
            placeholder="E-mail*"
            name="email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="infoFormPNumber"
            className={`form-control mb-4
            ${this.errorClass(this.state.formErrors.pNumber)}`}
            placeholder="Număr de telefon*"
            name="pNumber"
            value={pNumber}
            onChange={this.onChange}
          />
        </div>
        <small id="emailHelp" className="form-text text-muted mb-4">
          Nu vom dezvălui nimănui detaliile dumneavoastră!
        </small>

        <div className="form-group">
          <label htmlFor="exampleTextarea">Mesaj</label>
          <textarea
            className={`form-control 
            ${this.errorClass(this.state.formErrors.message)}`}
            id="exampleTextarea"
            rows="4"
            name="message"
            value={message}
            onChange={this.onChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button
            disabled={!this.state.formValid}
            className="btn btn-info btn-block"
            type="submit"
          >
            Trimite
          </button>
        </div>
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
          style={{ display: "none" }}
        >
          Informațiile au fost trimise cu success. Veți fi contactat cât mai
          curând!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, { sendEmail })(Form);
