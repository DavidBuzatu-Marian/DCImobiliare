import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { sendEmail } from "../../../../actions/emails";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";
import { Form } from "../../components/Form";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

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
    const property = this.state.property;
    const location = [
      property.coordinatesLatitude,
      property.coordinatesLongitude
    ];
    return (
      <Fragment>
        {this.state.isLoading ? (
          <div className="sweet-loading" style={{ marginTop: "120px" }}>
            <BarLoader
              sizeUnit={"px"}
              css={override}
              size={200}
              color={"#123abc"}
              loading={this.state.isLoading}
            />
          </div>
        ) : (
          <div className="container" style={{ marginTop: "140px" }}>
            <div className="row align-items-center margin-sm">
              <div className="row display-inline p-3">
                <h3>{property.title}</h3>
                <h5 className="fontw-300">{property.zone}</h5>
                <Link
                  className="link"
                  to="map"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Vezi Harta
                </Link>
                <h1 className="mt-5 price-font-presentation">
                  {property.sale_type} -{" "}
                  <strong>{property.price.toLocaleString()} EUR</strong>
                </h1>
              </div>
              <Carousel>
                {property.images.map(image => (
                  <img key={image.id} src={`/static/${image.image}`} />
                ))}
              </Carousel>
              <div className="row p-3">
                <h3 className="border-bottom">Detalii</h3>
                <p>{property.details}</p>
              </div>
              <div className="row p-3">
                <h3 className="border-bottom">Caracteristici</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td style={{ borderTop: "0" }}>
                        Nr. camere:{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.nr_rooms}
                        </strong>
                      </td>
                      <td style={{ borderTop: "0" }}>
                        Nr. bucătării:{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.nr_kitchens}
                        </strong>
                      </td>
                      <td style={{ borderTop: "0" }}>
                        Nr. băi:{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.nr_bathrooms}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Suprafață utilă(mp):{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.surface_mp}
                        </strong>
                      </td>
                      <td>
                        Compartimentare:{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.accomodated}
                        </strong>
                      </td>
                      <td>
                        An construcție:
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.year}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Confort:{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.confort}
                        </strong>
                      </td>
                      <td>
                        Etaj:{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.floor}
                        </strong>
                      </td>
                      <td>
                        Nr. balcoane:{" "}
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.nr_balconies}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Nr. locuri parcare:
                        <strong style={{ color: "#000005", float: "right" }}>
                          {property.nr_parking_spots}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row py-3" id={"map"}>
              <h3 className="border-bottom">Localizare hartă</h3>
              <Map
                center={location}
                zoom={16}
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
            <div className="row align-items-center margin-sm">
              <Form
                sendEmail={sendEmail}
                propertyRequest={true}
                propertyTitle={property.title}
                propertyId={property.id}
              ></Form>
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
