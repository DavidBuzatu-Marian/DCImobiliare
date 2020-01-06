import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProperties } from "../../../../actions/properties";
import "../../../../assets/css/properties.css";
import axios from "axios";
import Card from "../../components/Card";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/ClipLoader";
import InfiniteScroll from "react-infinite-scroll-component";

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
    this.nextData = this.nextData.bind(this);
  }

  state = {
    isLoading: true,
    filterType: "Preț (cresc.)",
    properties: [],
    allProperties: [],
    filteredProperties: [],
    hasMore: true,
    loadingLimit: 10,
    sellChecked: false,
    rentChecked: false
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

  sortBySurfaceDesc(a, b) {
    return a.surface_mp < b.surface_mp
      ? 1
      : a.surface_mp > b.surface_mp
      ? -1
      : 0;
  }

  sortAsc() {
    let sortedProperties = this.state.filteredProperties;
    sortedProperties.sort(this.sortByPriceAsc);
    this.setState({
      filteredProperties: filteredProperties,
      properties: [...sortedProperties.slice(0, this.state.loadingLimit)],
      filterType: "Preț (cresc.)"
    });
  }

  sortDesc() {
    let sortedProperties = this.state.filteredProperties;
    sortedProperties.sort(this.sortByPriceDesc);
    this.setState({
      filteredProperties: sortedProperties,
      properties: [...sortedProperties.slice(0, this.state.loadingLimit)],
      filterType: "Preț (desc.)"
    });
  }

  sortNrRoomsAsc() {
    let sortedProperties = this.state.filteredProperties;
    sortedProperties.sort(this.sortByNrRoomsAsc);
    this.setState({
      filteredProperties: sortedProperties,
      properties: [...sortedProperties.slice(0, this.state.loadingLimit)],
      filterType: "Nr. camere (cresc.)"
    });
  }
  sortNrRoomsDesc() {
    let sortedProperties = this.state.filteredProperties;
    sortedProperties.sort(this.sortByNrRoomsDesc);
    this.setState({
      filteredProperties: sortedProperties,
      properties: [...sortedProperties.slice(0, this.state.loadingLimit)],
      filterType: "Nr. camere (desc.)"
    });
  }

  sortSurfaceAsc() {
    let sortedProperties = this.state.filteredProperties;
    sortedProperties.sort(this.sortBySurfaceAsc);
    this.setState({
      filteredProperties: sortedProperties,
      properties: [...sortedProperties.slice(0, this.state.loadingLimit)],
      filterType: "Suprafață (cresc.)"
    });
  }
  sortSurfaceDesc() {
    let sortedProperties = this.state.filteredProperties;
    sortedProperties.sort(this.sortBySurfaceDesc);
    this.setState({
      filteredProperties: sortedProperties,
      properties: [...sortedProperties.slice(0, this.state.loadingLimit)],
      filterType: "Suprafață (desc.)"
    });
  }

  componentDidMount() {
    axios
      .get("/api/properties")
      .then(res => {
        let properties = res.data;
        properties.sort(this.sortByPriceAsc);
        conso;
        this.setState({
          isLoading: false,
          allProperties: properties,
          filteredProperties: properties,
          properties: [...properties.slice(0, this.state.loadingLimit)],
          hasMore: properties && properties.length
        });
      })
      .catch(err => console.log(err));
  }

  nextData() {
    let properties = this.state.properties;
    if (properties.length === 0) {
      this.setState({
        hasMore: false
      });
    }
    if (properties.length === this.state.filteredProperties.length) {
      this.setState({
        hasMore: false
      });
    } else {
      this.setState({
        properties: [
          ...properties,
          ...this.state.filteredProperties.slice(
            properties.length,
            properties.length + this.state.loadingLimit
          )
        ]
      });
    }
  }

  onChange = e => {
    e.persist();

    let sellChecked = this.state.sellChecked;
    let rentChecked = this.state.rentChecked;
    e.target.name === "Vanzare"
      ? (sellChecked = e.target.checked)
      : (rentChecked = e.target.checked);

    let filtered_properties = this.state.allProperties.filter(property => {
      let sale_type = property.sale_type;
      if (sellChecked && rentChecked) {
        return sale_type.includes("Vanzare/ Inchiriere");
      } else if (sellChecked && !rentChecked) {
        return sale_type.includes("Vanzare");
      } else if (!sellChecked && rentChecked) {
        return sale_type.includes("Inchiriere");
      } else {
        return false;
      }
    });

    if (!sellChecked && !rentChecked) {
      filtered_properties = this.state.allProperties;
    }
    this.setState({
      sellChecked:
        e.target.name === "Vanzare" ? e.target.checked : this.state.sellChecked,
      rentChecked:
        e.target.name === "Inchiriere"
          ? e.target.checked
          : this.state.rentChecked,
      filteredProperties: filtered_properties,
      hasMore: filtered_properties.length === 0 ? false : true,
      properties: [...filtered_properties.slice(0, this.state.loadingLimit)]
    });
  };

  render() {
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
          <div
            id="properties"
            className="container"
            style={{ marginTop: "120px" }}
          >
            <div className="row align-items-center">
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
              <div className="form-group my-auto ml-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="sell"
                    name="Vanzare"
                    defaultChecked={false}
                    onChange={this.onChange}
                  />
                  <label className="custom-control-label" htmlFor="sell">
                    Vânzare
                  </label>
                </div>
              </div>
              <div className="form-group my-auto ml-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="rent"
                    name="Inchiriere"
                    defaultChecked={false}
                    onChange={this.onChange}
                  />
                  <label className="custom-control-label" htmlFor="rent">
                    Închiriere
                  </label>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <InfiniteScroll
                dataLength={this.state.properties.length}
                next={this.nextData}
                hasMore={this.state.hasMore}
                loader={
                  <BarLoader
                    sizeUnit={"px"}
                    css={override}
                    size={100}
                    color={"#123abc"}
                    loading={this.state.hasMore}
                    overflow={"none"}
                  />
                }
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>
                      Total anunțuri afișate: {this.state.properties.length}
                    </b>
                  </p>
                }
                style={{ overflow: "none" }}
              >
                {this.state.properties.map(property => (
                  <Card key={property.id} property={property}></Card>
                ))}
              </InfiniteScroll>
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
