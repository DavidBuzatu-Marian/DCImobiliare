import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
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
    axios
      .get(`/api/properties/${id}`)
      .then(res => {
        this.setState({
          property: res.data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;
    const property = this.state.property;
    console.log(property.images);
    return (
      <Fragment>
        {this.state.isLoading ? (
          loadingMessage
        ) : (
          <div className="container" style={{ marginTop: "120px" }}>
            <div className="row align-items-center margin-sm">
              <Carousel>
                {property.images.map(image => (
                  <img key={image.id} src={image.image} />
                ))}
              </Carousel>
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
