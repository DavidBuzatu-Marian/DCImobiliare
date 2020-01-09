import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { sendEmail } from "../../../../actions/emails";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

import { Form } from "../../components/Form";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

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
    const details =
      property.details !== undefined
        ? property.details.split(/\r?\n/).map((item, i) => {
            return <p key={i}>{item}</p>;
          })
        : "";
    if (property.details !== undefined) {
      console.log(property.details);
    }
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
          <div className="container p-4" style={{ marginTop: "4rem" }}>
            <div className="row align-items-center">
              <div className="row display-inline p-3">
                <h3>{property.title}</h3>
                <h5 className="fontw-300">{property.zone}</h5>
                <h1 className="mt-5 price-font-presentation">
                  {property.sale_type} -{" "}
                  <strong>{property.price.toLocaleString()} EUR</strong>
                </h1>
              </div>
              <Carousel>
                {property.images.map(image => (
                  <img key={image.id} src={image.image} />
                ))}
              </Carousel>
              <div className="row p-3">
                <h3 className="border-bottom">Detalii</h3>
                {details}
              </div>
              <div className="row p-3">
                <h3 className="border-bottom">Caracteristici</h3>
                <table className="table">
                  <tbody>
                    <tr className="d-flex row">
                      <td className="col-4" style={{ borderTop: "0" }}>
                        Nr. camere:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.nr_rooms}
                        </strong>
                      </td>
                      <td className="col-4" style={{ borderTop: "0" }}>
                        Nr. bucătării:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.nr_kitchens}
                        </strong>
                      </td>
                      <td className="col-4" style={{ borderTop: "0" }}>
                        Nr. băi:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.nr_bathrooms}
                        </strong>
                      </td>
                    </tr>
                    <tr className="d-flex row">
                      <td className="col-4">
                        Suprafață utilă(mp):{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.surface_mp}
                        </strong>
                      </td>
                      <td className="col-4">
                        Nr. locuri parcare:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.nr_parking_spots}
                        </strong>
                      </td>
                      <td className="col-4">
                        An construcție:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.year}
                        </strong>
                      </td>
                    </tr>
                    <tr className="d-flex row">
                      <td className="col-4">
                        Confort:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.confort}
                        </strong>
                      </td>
                      <td className="col-4">
                        Etaj:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.floor}
                        </strong>
                      </td>
                      <td className="col-4">
                        Nr. balcoane:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.nr_balconies}
                        </strong>
                      </td>
                    </tr>
                    <tr className="d-flex row">
                      <td className="col-6">
                        Compartimentare:{" "}
                        <strong
                          className="float-r-ld"
                          style={{ color: "#000005" }}
                        >
                          {property.accomodated}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
