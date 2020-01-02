import React, { Component } from "react";
import TableCard from "../../components/TableCard";
export default class BannerTableServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: 0,
      activeIntermediary: true,
      activeRepresentation: false,
      activeRent: false
    };
    this.showTableRow = this.showTableRow.bind(this);
  }

  showTableRow(service) {
    this.setState({
      service: service,
      activeIntermediary: service == 0,
      activeRepresentation: service == 1,
      activeRent: service === 2
    });
  }

  render() {
    const serviceHeaders = ["Intermediere", "Reprezentare", "Chirie"];
    const serviceDetail = [
      "Pachetul minim pentru a începe o vânzare",
      "Uitați de toate grijile actelor și demersurile nenumărate pentru a încheia o tranzacție",
      "Mă ocup de tot procesul pentru a-ți închiria apartamentul. Între timp, dacă găsești chiar tu pe cineva, îl poți închiria și fără mine."
    ];
    const comissionPrices = ["600", "1200", "0"];
    const comissionPercents = ["1.5%", "3%", "50%"];
    const comissionDetails = [
      "din prețul de vânzare",
      "din prețul de vânzare",
      "din prima lună de chirie"
    ];
    return (
      <section
        id={"servicesTable"}
        className="overflow-hidden p-0 w-100 inline-block mt-10 mb-5"
        style={{ marginTop: "-6px !important" }}
      >
        <div className="h-100 left-0 top-0">
          <div className="container">
            <div className="d-sm-block d-md-block d-lg-none d-xl-none">
              <div>
                <ul className="nav justify-content-center ">
                  <li className="nav-item m-0">
                    <button
                      className={`nav-link btn btn-secondary btn-table-option ${
                        this.state.activeIntermediary ? "active" : ""
                      }`}
                      onClick={() => this.showTableRow(0)}
                    >
                      Intermediere
                    </button>
                  </li>
                  <li className="nav-item m-0">
                    <button
                      className={`nav-link btn btn-secondary btn-table-option ${
                        this.state.activeRepresentation ? "active" : ""
                      }`}
                      onClick={() => this.showTableRow(1)}
                    >
                      Reprezentare
                    </button>
                  </li>
                  <li className="nav-item m-0">
                    <button
                      className={`nav-link btn btn-secondary btn-table-option ${
                        this.state.activeRent ? "active" : ""
                      }`}
                      onClick={() => this.showTableRow(2)}
                    >
                      Chirie
                    </button>
                  </li>
                </ul>
              </div>
              <TableCard
                serviceName={serviceHeaders[this.state.service]}
                serviceDetail={serviceDetail[this.state.service]}
                comissionPrice={comissionPrices[this.state.service]}
                comissionPercents={comissionPercents[this.state.service]}
                comissionDetails={comissionDetails[this.state.service]}
              ></TableCard>
            </div>
            <div className="row table-responsive">
              <table className="table table-borderless ">
                <thead>
                  <tr className="display-none">
                    <th
                      scope="col"
                      className="v-align-top table-h-font-size "
                      style={{ width: "25%" }}
                    >
                      Pachet de servicii
                    </th>
                    <td
                      scope="col"
                      className="padding-table-head"
                      style={{ width: "25%" }}
                    >
                      <div>
                        <h2 className="no-caps">Intermediere</h2>
                      </div>
                      <p className="mt-4">
                        Pachetul minim pentru a începe o vânzare
                      </p>
                    </td>
                    <td
                      scope="col"
                      className="padding-table-head"
                      style={{ width: "25%" }}
                    >
                      <div>
                        <h2 className="no-caps">Reprezentare</h2>
                      </div>
                      <p className="mt-4">
                        Uită de toate grijile actelor și demersurile nenumărate
                        pentru a încheia o tranzacție
                      </p>
                    </td>
                    <td
                      scope="col"
                      className="padding-table-head"
                      style={{ width: "25%" }}
                    >
                      <div>
                        <h2 className="no-caps">Chirie</h2>
                      </div>
                      <p className="mt-4">
                        Mă ocup de tot procesul pentru a-ți închiria
                        apartamentul. Între timp, dacă găsești chiar tu pe
                        cineva, îl poți închiria și fără mine.
                      </p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="display-none">
                    <th scope="row" className="v-align-top table-h-font-size">
                      Comision
                    </th>
                    <td>
                      <div className="row table-div">
                        <div className="table-price">600</div>
                        <div className="table-euro">€</div>
                      </div>
                      <div>
                        <p className="table-h-font-size text-center">
                          pentru proprietăți sub 40.000€
                        </p>
                      </div>
                      <div className="row table-div">
                        <div className="table-price">1.5%</div>
                      </div>
                      <div className="table-euro">din prețul de vânzare</div>
                      <div className="mt-3">
                        <p className="table-h-font-size text-center">
                          pentru proprietăți peste 40.000€
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="row table-div">
                        <div className="table-price">1200</div>
                        <div className="table-euro">€</div>
                      </div>
                      <div>
                        <p className="table-h-font-size text-center">
                          pentru proprietăți sub 40.000€
                        </p>
                      </div>
                      <div className="row table-div">
                        <div className="table-price">3%</div>
                      </div>
                      <div className="table-euro">din prețul de vânzare</div>
                      <div className="mt-3">
                        <p className="table-h-font-size text-center">
                          pentru proprietăți peste 40.000€
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="row table-div">
                        <div className="table-price">50%</div>
                      </div>
                      <div>
                        <p className="table-h-font-size text-center">
                          din prima lună de chirie
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="table-h-no-space  bordered-detail"
                    >
                      Beneficii
                    </th>
                    <td className="bordered-detail"></td>
                    <td className="bordered-detail"></td>
                    <td className="bordered-detail"></td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="table-h-no-space table-h-secondary-font-size"
                    >
                      Consiliere juridică
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRent ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="table-h-no-space table-h-secondary-font-size">
                        Acte
                      </div>
                      <p className="table-p-extra ml-3 mt-3 mb-0">
                        GESTIONATE PERSONAL
                      </p>
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRent ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="table-h-no-space table-h-secondary-font-size">
                        Publicitate
                      </div>
                      <p className="table-p-extra ml-3 mt-3 mb-0">
                        Peste 15 site-uri de specialitate
                      </p>
                      <p className="table-p-extra ml-3 mb-0">
                        Pe grupurile de vânzări de pe rețelele de socializare
                      </p>
                      <p className="table-p-extra ml-3">
                        Organică pe paginile de Facebook & Instagram
                      </p>
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRent ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Recomandare notar și bănci partenere
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="table-h-no-space table-h-secondary-font-size"
                    >
                      Evaluarea gratuită a proprietății
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRent ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="table-h-no-space table-h-secondary-font-size"
                    >
                      <div className="table-h-no-space table-h-secondary-font-size">
                        Clienți cumpărători
                      </div>
                      <p className="table-p-extra ml-3 mt-3 mb-0">
                        Prin sursele de promovare
                      </p>
                      <p
                        className={`table-p-extra ml-3 mb-0 ${
                          this.state.activeIntermediary ? "display-none" : ""
                        }`}
                      >
                        Prin colaborări cu alți agenți/ agenții
                      </p>
                      <p
                        className={`table-p-extra ml-3 ${
                          this.state.activeIntermediary ? "display-none" : ""
                        }`}
                      >
                        Prin băncile partenere
                      </p>
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRent ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="table-h-no-space table-h-secondary-font-size"
                    >
                      <div className="table-h-no-space table-h-secondary-font-size">
                        Informare permanentă
                      </div>
                      <p className="table-p-extra ml-3 mt-3 mb-0">
                        Numărul de accesări al anunțului, de apeluri/ mesaje
                        primite
                      </p>
                      <p className="table-p-extra ml-3 mb-0">
                        Oferte și nelămuriri ale clienților
                      </p>
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRent ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="table-h-no-space table-h-secondary-font-size"
                    >
                      Negociere transparentă a prețului
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRent ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Fotografii profesionale
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Anunț reactualizat periodic
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--no"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <path
                          fill="#DBD9D2"
                          d="M8.725 10.755c.294.295.582.301.864.019l1.19-1.192c.294-.295.294-.589 0-.884l-3.091-3.095 3.072-3.076c.294-.295.301-.583.019-.865l-1.44-1.442c-.294-.295-.589-.295-.883 0l-3.072 3.076-3.072-3.076c-.294-.295-.589-.295-.883 0l-1.19 1.192c-.282.282-.275.57.019.865l3.072 3.076-3.11 3.114c-.294.295-.294.589 0 .884l1.44 1.442c.282.282.57.276.864-.019l3.11-3.114 3.091 3.095z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Comision 0% la cumpărător
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--no"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <path
                          fill="#DBD9D2"
                          d="M8.725 10.755c.294.295.582.301.864.019l1.19-1.192c.294-.295.294-.589 0-.884l-3.091-3.095 3.072-3.076c.294-.295.301-.583.019-.865l-1.44-1.442c-.294-.295-.589-.295-.883 0l-3.072 3.076-3.072-3.076c-.294-.295-.589-.295-.883 0l-1.19 1.192c-.282.282-.275.57.019.865l3.072 3.076-3.11 3.114c-.294.295-.294.589 0 .884l1.44 1.442c.282.282.57.276.864-.019l3.11-3.114 3.091 3.095z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--yes"
                        width="16.0000038"
                        height="12.2530823"
                        viewBox="0 0 16.0000038 12.2530823"
                      >
                        <path
                          fill="#006E7A"
                          d="M13.646 0l-7.456 7.81-4.089-3.468-2.101 2.468 5.266 4.456 1.165.987 1.063-1.101 8.506-8.911z"
                        ></path>
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" id="form-toggle">
                      <div
                        className={`table-h-no-space table-h-secondary-font-size ${
                          this.state.activeRent ? "display-none" : ""
                        }`}
                      >
                        Extrasele de carte funciară
                      </div>
                      <p className="table-p-extra ml-3 mt-3 mb-0">
                        Cel de autentificare și informare
                      </p>
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--no"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <path
                          fill="#DBD9D2"
                          d="M8.725 10.755c.294.295.582.301.864.019l1.19-1.192c.294-.295.294-.589 0-.884l-3.091-3.095 3.072-3.076c.294-.295.301-.583.019-.865l-1.44-1.442c-.294-.295-.589-.295-.883 0l-3.072 3.076-3.072-3.076c-.294-.295-.589-.295-.883 0l-1.19 1.192c-.282.282-.275.57.019.865l3.072 3.076-3.11 3.114c-.294.295-.294.589 0 .884l1.44 1.442c.282.282.57.276.864-.019l3.11-3.114 3.091 3.095z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      Gratuite
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Promovare plătită
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--no"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <path
                          fill="#DBD9D2"
                          d="M8.725 10.755c.294.295.582.301.864.019l1.19-1.192c.294-.295.294-.589 0-.884l-3.091-3.095 3.072-3.076c.294-.295.301-.583.019-.865l-1.44-1.442c-.294-.295-.589-.295-.883 0l-3.072 3.076-3.072-3.076c-.294-.295-.589-.295-.883 0l-1.19 1.192c-.282.282-.275.57.019.865l3.072 3.076-3.11 3.114c-.294.295-.294.589 0 .884l1.44 1.442c.282.282.57.276.864-.019l3.11-3.114 3.091 3.095z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      Gratuit
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Certificat energetic
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--no"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <path
                          fill="#DBD9D2"
                          d="M8.725 10.755c.294.295.582.301.864.019l1.19-1.192c.294-.295.294-.589 0-.884l-3.091-3.095 3.072-3.076c.294-.295.301-.583.019-.865l-1.44-1.442c-.294-.295-.589-.295-.883 0l-3.072 3.076-3.072-3.076c-.294-.295-.589-.295-.883 0l-1.19 1.192c-.282.282-.275.57.019.865l3.072 3.076-3.11 3.114c-.294.295-.294.589 0 .884l1.44 1.442c.282.282.57.276.864-.019l3.11-3.114 3.091 3.095z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      Gratuit
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Certificat fiscal
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--no"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <path
                          fill="#DBD9D2"
                          d="M8.725 10.755c.294.295.582.301.864.019l1.19-1.192c.294-.295.294-.589 0-.884l-3.091-3.095 3.072-3.076c.294-.295.301-.583.019-.865l-1.44-1.442c-.294-.295-.589-.295-.883 0l-3.072 3.076-3.072-3.076c-.294-.295-.589-.295-.883 0l-1.19 1.192c-.282.282-.275.57.019.865l3.072 3.076-3.11 3.114c-.294.295-.294.589 0 .884l1.44 1.442c.282.282.57.276.864-.019l3.11-3.114 3.091 3.095z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      Gratuit
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className={`table-h-no-space table-h-secondary-font-size ${
                        this.state.activeRent ? "display-none" : ""
                      }`}
                    >
                      Adeverința de la asociația de locatari
                    </th>
                    <td
                      className={`${
                        this.state.activeIntermediary ? "" : "display-none"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon--no"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                      >
                        <path
                          fill="#DBD9D2"
                          d="M8.725 10.755c.294.295.582.301.864.019l1.19-1.192c.294-.295.294-.589 0-.884l-3.091-3.095 3.072-3.076c.294-.295.301-.583.019-.865l-1.44-1.442c-.294-.295-.589-.295-.883 0l-3.072 3.076-3.072-3.076c-.294-.295-.589-.295-.883 0l-1.19 1.192c-.282.282-.275.57.019.865l3.072 3.076-3.11 3.114c-.294.295-.294.589 0 .884l1.44 1.442c.282.282.57.276.864-.019l3.11-3.114 3.091 3.095z"
                        ></path>
                      </svg>
                    </td>
                    <td
                      className={`${
                        this.state.activeRepresentation ? "" : "display-none"
                      }`}
                    >
                      Gratuit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
