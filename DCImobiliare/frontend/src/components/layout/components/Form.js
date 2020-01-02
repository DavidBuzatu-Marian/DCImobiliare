import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmail, validateForm } from "../../../actions/emails";
import DjangoCSRFToken from "django-react-csrftoken";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export class Form extends Component {
  state = {
    name: "",
    pNumber: "",
    email: "",
    message: "",
    messageDefault: "",
    formErrors: {
      email: "",
      name: "",
      pNumber: "",
      message: "",
      termsCheck: ""
    },
    emailValid: false,
    nameValid: false,
    pNumberValid: false,
    messageValid: false,
    formValid: false,
    propertyRequest: false,
    propertyId: 0,
    propertyTitle: "",
    isLoading: true
  };
  constructor(props) {
    super(props);

    this.state.propertyRequest = props.propertyRequest;
    this.state.propertyTitle = props.propertyTitle;
    this.state.propertyId = props.propertyId;
    this.state.messageDefault = props.propertyRequest
      ? "Doresc să aflu mai multe informații despre proprietatea " +
        props.propertyTitle
      : "";
  }

  static propTypes = {
    sendEmail: PropTypes.func.isRequired
  };

  onCheckChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.checked }, () => {
      this.validateField(e.target.name, e.target.checked);
    });
  };

  onChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.validateField(e.target.name, e.target.value);
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, pNumber, email, propertyRequest } = this.state;
    const message = propertyRequest
      ? "ID proprietate: " +
        this.state.propertyId +
        "\n Mesaj: " +
        this.state.message
      : "Mesaj:" + this.state.message;
    const emailContent = { name, pNumber, email, message };
    let loader = document.getElementById("formLoader");
    loader.style.display = "block";
    this.props.sendEmail(emailContent);
    this.setState({
      name: "",
      pNumber: "",
      email: "",
      message: "",
      messageDefault: "",
      formErrors: {
        email: "",
        name: "",
        pNumber: "",
        message: "",
        termsCheck: ""
      },
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
      case "termsCheck":
        fieldValidationErrors.termsCheck = this.state.termsCheck
          ? ""
          : " field is required";
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
        this.state.messageValid &&
        this.state.termsCheck
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  render() {
    const {
      name,
      pNumber,
      email,
      message,
      propertyRequest,
      messageDefault
    } = this.state;
    const dividedFormRow = propertyRequest ? "row" : "";
    const dividedFormFields = propertyRequest
      ? "col-lg-4 col-sm-12 col-md-12"
      : "";
    const dividedFormMessage = propertyRequest
      ? "col-lg-8 col-sm-12 col-md-12"
      : "";
    const divClass = propertyRequest
      ? "col mt-1 shadow p-3 mb-5 bg-white rounded margin-auto-md"
      : "";
    const titleText = propertyRequest
      ? "Solicită mai multe informații"
      : "Interesat de ofertele mele?";
    return (
      <div className={divClass}>
        <form
          className="text-center border border-light p-5 body-form"
          onSubmit={this.onSubmit}
        >
          <DjangoCSRFToken />
          <p className="h4 mb-4">{titleText}</p>

          <p>Completează toate câmpurile dacă dorești să fii contactat</p>
          <div className={`${dividedFormRow}`}>
            <div className={`${dividedFormFields}`}>
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
              <div className="form-group">
                <div className="custom-control custom-checkbox required">
                  <input
                    type="checkbox"
                    className={`custom-control-input ${this.errorClass(
                      this.state.formErrors.termsCheck
                    )}`}
                    id="termsCheck"
                    name="termsCheck"
                    defaultChecked={false}
                    onChange={this.onChange}
                  />
                  <label className="custom-control-label" htmlFor="termsCheck">
                    Sunt de acord cu
                    <Link to={`/terms-and-conditions/`} target="_blank">
                      termenii și condițiile
                    </Link>
                  </label>
                </div>
              </div>
            </div>
            <div className={`${dividedFormMessage}`}>
              <div className="form-group">
                <textarea
                  className={`form-control 
            ${this.errorClass(this.state.formErrors.message)}`}
                  id="exampleTextarea"
                  rows="10"
                  name="message"
                  defaultValue={messageDefault}
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
                Informațiile au fost trimise cu success. Veți fi contactat cât
                mai curând!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                id="formLoader"
                className="sweet-loading"
                style={{ marginTop: "20px", display: "none" }}
              >
                <BarLoader
                  sizeUnit={"px"}
                  css={override}
                  size={50}
                  color={"#123abc"}
                  loading={this.state.isLoading}
                  display="none"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { sendEmail })(Form);
