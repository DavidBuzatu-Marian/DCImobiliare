import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmail } from "../../../actions/emails";

export class Form extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    message: ""
  };
  static propTypes = {
    sendEmail: PropTypes.func.isRequired
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    console.log("Err");
    e.preventDefault();
    const { name, surname, email, message } = this.state;
    const emailContent = { name, surname, email, message };
    this.props.sendEmail(emailContent);
    this.setState({
      name: "",
      surname: "",
      email: "",
      message: ""
    });
  };

  render() {
    const { name, surname, email, message } = this.state;
    return (
      <form
        className="text-center border border-light p-5 bodyForm"
        action="#!"
      >
        <p className="h4 mb-4">Interesat de ofertele mele?</p>

        <p>Completează câmpurile dacă dorești să fii contactat</p>

        <input
          type="text"
          id="infoFormName"
          className="form-control mb-4"
          placeholder="Nume"
          name="name"
          value={name}
          onChange={this.onChange}
        />
        <input
          type="text"
          id="infoFormSurname"
          className="form-control mb-4"
          placeholder="Prenume"
          name="surname"
          value={surname}
          onChange={this.onChange}
        />

        <input
          type="email"
          id="infoFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <small id="emailHelp" className="form-text text-muted mb-4">
          Nu vom dezvălui nimănui e-mailul dumneavoastră!
        </small>

        <div className="form-group">
          <label for="exampleTextarea">Mesaj</label>
          <textarea
            className="form-control"
            id="exampleTextarea"
            rows="4"
            name="message"
            value={message}
            onChange={this.onChange}
          ></textarea>
        </div>

        <button className="btn btn-info btn-block" type="submit">
          Trimite
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { sendEmail }
)(Form);
