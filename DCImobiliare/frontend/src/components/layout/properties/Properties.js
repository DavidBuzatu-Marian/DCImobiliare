import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProperties } from "../../../actions/properties";

export class Properties extends Component {
  static propTypes = {
    getProperties: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    return (
      <Fragment>
        <h2>Offers</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.properties.map(property => (
              <tr key={property.id}>
                <td>{property.id}</td>
                <td>{property.title}</td>
                <td>{property.details}</td>
                <td>{property.price}</td>
                <td>{property.image}</td>
                {/* <td>
                  <button
                    onClick={this.props.deleteoffer.bind(this, offer.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  properties: state.properties.properties
});

export default connect(
  mapStateToProps,
  { getProperties }
)(Properties);
