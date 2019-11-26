import React, { Component } from "react";

export default class TableCard extends Component {
  render() {
    return (
      <div className="col-12 card card-cascade narrower mt-3 p-3 mb-1 bg-white rounded">
        <div className="card-header text-center">
          <h2 className="no-caps">{this.props.serviceName}</h2>
          <p className="mt-4">{this.props.serviceDetail}</p>
        </div>
        <div className="row no-gutters">
          <div className="card-body card-body-cascade text-center">
            <h4 className="card-title">
              <strong>Comision</strong>
            </h4>
            <p className="card-text">Începând de la</p>
            <div className="row table-div mt-3 mb-3">
              <div className="table-price">{this.props.comissionPrice}</div>
              <div className="table-price-fraction">99</div>
              <div className="table-euro">€</div>
            </div>
            <div>
              <p className="card-text text-center">
                pentru proprietăți sub 40.000€
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
