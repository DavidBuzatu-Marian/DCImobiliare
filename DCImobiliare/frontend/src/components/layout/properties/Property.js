import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

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
    const location = [51.505, -0.09];
    return (
      <Fragment>
        {this.state.isLoading ? (
          loadingMessage
        ) : (
          <div className="container" style={{ marginTop: "140px" }}>
            <div className="row align-items-center margin-sm">
              <Carousel>
                {property.images.map(image => (
                  <img key={image.id} src={image.image} />
                ))}
              </Carousel>
            </div>
            <div className="row col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <Map
                center={location}
                zoom={13}
                style={{ width: "100%", height: "400px" }}
              >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                ></TileLayer>
                <Marker position={location}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </Map>
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
