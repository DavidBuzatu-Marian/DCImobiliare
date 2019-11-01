import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProperty } from "../../../actions/properties";
import axios from "axios";
export class Property extends Component {
  state = {
    isLoading: true,
    id: 0
  };

  static propTypes = {
    getProperty: PropTypes.func.isRequired
  };

  componentDidMount() {
    // this.props.getProperty(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.setState({
      id: this.props.match.params.id
    });
    axios
      .get(`/api/properties/${id}`)
      .then(res => {
        console.log(res.data[0].fields);
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.id);
    return <div>Hello</div>;
  }
}

const mapStateToProps = state => ({
  property: state.property.property
});

export default connect(
  mapStateToProps,
  { getProperty }
)(Property);
