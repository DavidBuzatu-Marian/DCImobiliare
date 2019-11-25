import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProperties } from "../../../../actions/properties";
import "../../../../assets/css/properties.css";
import axios from "axios";
import Card from "../../components/Card";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export class Properties extends Component {
  constructor(props) {
    super(props);
    this.sortAsc = this.sortAsc.bind(this);
    this.sortDesc = this.sortDesc.bind(this);
    this.sortNrRoomsAsc = this.sortNrRoomsAsc.bind(this);
    this.sortNrRoomsDesc = this.sortNrRoomsDesc.bind(this);
    this.sortSurfaceAsc = this.sortSurfaceAsc.bind(this);
    this.sortSurfaceDesc = this.sortSurfaceDesc.bind(this);
  }

  state = {
    isLoading: true,
    filterType: "Preț (cresc.)",
    properties: []
  };

  static propTypes = {
    getProperties: PropTypes.func.isRequired
  };

  sortByPriceAsc(a, b) {
    return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
  }

  sortByPriceDesc(a, b) {
    return a.price < b.price ? 1 : a.price > b.price ? -1 : 0;
  }
  sortByNrRoomsAsc(a, b) {
    return a.nr_rooms < b.nr_rooms ? -1 : a.nr_rooms > b.nr_rooms ? 1 : 0;
  }

  sortByNrRoomsDesc(a, b) {
    return a.nr_rooms < b.nr_rooms ? 1 : a.nr_rooms > b.nr_rooms ? -1 : 0;
  }
  sortBySurfaceAsc(a, b) {
    return a.surface_mp < b.surface_mp
      ? -1
      : a.surface_mp > b.surface_mp
      ? 1
      : 0;
  }

  sortBysurface_mpDesc(a, b) {
    return a.surface_mp < b.surface_mp
      ? 1
      : a.surface_mp > b.surface_mp
      ? -1
      : 0;
  }

  sortAsc() {
    let sortedProperties = this.state.properties;
    sortedProperties.sort(this.sortByPriceAsc);
    this.setState({
      properties: sortedProperties,
      filterType: "Preț (cresc.)"
    });
  }

  sortDesc() {
    let sortedProperties = this.state.properties;
    sortedProperties.sort(this.sortByPriceDesc);
    this.setState({ properties: sortedProperties, filterType: "Preț (desc.)" });
  }

  sortNrRoomsAsc() {
    let sortedProperties = this.state.properties;
    sortedProperties.sort(this.sortByNrRoomsAsc);
    this.setState({
      properties: sortedProperties,
      filterType: "Nr. camere (cresc.)"
    });
  }
  sortNrRoomsDesc() {
    let sortedProperties = this.state.properties;
    sortedProperties.sort(this.sortByNrRoomsDesc);
    this.setState({
      properties: sortedProperties,
      filterType: "Nr. camere (desc.)"
    });
  }

  sortSurfaceAsc() {
    let sortedProperties = this.state.properties;
    sortedProperties.sort(this.sortBySurfaceAsc);
    this.setState({
      properties: sortedProperties,
      filterType: "Suprafață (cresc.)"
    });
  }
  sortSurfaceDesc() {
    let sortedProperties = this.state.properties;
    sortedProperties.sort(this.sortBySurfaceDesc);
    this.setState({
      properties: sortedProperties,
      filterType: "Suprafață (desc.)"
    });
  }

  componentDidMount() {
    axios
      .get("/api/properties")
      .then(res => {
        let properties = res.data;
        properties.sort(this.sortByPriceAsc);
        this.setState({
          isLoading: false,
          properties: properties
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <h2>Offers</h2>
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
          <div className="container" style={{ marginTop: "120px" }}>
            <div className="row align-items-center margin-sm">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.filterType}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button className="dropdown-item" onClick={this.sortAsc}>
                    Preț (cresc.)
                  </button>
                  <button className="dropdown-item" onClick={this.sortDesc}>
                    Preț (desc.)
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={this.sortNrRoomsAsc}
                  >
                    Nr. camere (cresc.)
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={this.sortNrRoomsDesc}
                  >
                    Nr. camere (desc.)
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={this.sortSurfaceAsc}
                  >
                    Suprafață (cresc.)
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={this.sortSurfaceDesc}
                  >
                    Suprafață (desc.)
                  </button>
                </div>
              </div>
            </div>
            <div className="row align-items-center margin-sm">
              {this.state.properties.map(property => (
                <Card key={property.id} property={property}></Card>
              ))}
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  properties: state.properties.properties
});

export default connect(mapStateToProps, { getProperties })(Properties);
