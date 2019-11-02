import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Carousel from "../properties/Carousel";

export class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      isLoading: true,
      property: []
    };
  }

  componentDidMount() {
    const id = this.state.id;
    console.log(id);
    axios
      .get(`/api/properties/${id}`)
      .then(res => {
        this.setState({
          property: res.data,
          isLoading: false
        });
        console.log(this.state.property);
      })
      .catch(err => console.log(err));
  }

  render() {
    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
    return (
      <Fragment>
        {this.state.isLoading ? (
          loadingMessage
        ) : (
          <div className="container" style={{ marginTop: "120px" }}>
            <div className="row align-items-center margin-sm">
              <Carousel
                property={this.state.property}
                images={this.state.property.images}
              ></Carousel>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  property: state.property.property
});

export default connect(mapStateToProps)(Property);
