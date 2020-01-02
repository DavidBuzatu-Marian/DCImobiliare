import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small cyan darken-3">
        <div className="container">
          <div className="row text-center-md">
            <div className="col-md-6 py-5">
              <div className="mb-5  py-2">
                <h5>Găsiți-mă pe:</h5>
                <div className="mt-1 p-1">
                  <a
                    className="fb-ic"
                    href="https://www.facebook.com/danielchituimobiliare/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-lg white-text mr-md-5 mr-3 fa-2x"
                    />
                  </a>
                  <a
                    className="ins-ic"
                    href="https://www.instagram.com/danielchitu_imobiliare/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fa-lg white-text mr-md-5 mr-3 fa-2x"
                    />
                  </a>
                </div>
                <h5 className="mt-2">Date de contact:</h5>
                <p className="my-1">Număr de telefon: 0746672949</p>
                <p className="my-1">Email: daniel.chitu886@yahoo.com</p>
                <div className="mt-3">
                  © David Buzatu 2019-2020. All rights reserved.
                </div>
                <div className="mt-1 text-center-md">
                  <a
                    className="display-inline"
                    href="http://127.0.0.1:8000/"
                    target="_blank"
                  >
                    www.DCImobiliare.ro
                  </a>
                  <p className="mx-2 display-inline">
                    {" "}
                    este o marcă înregistrată.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 footer-copyright text-center py-5 mt-2">
              <div>
                <Link to={`/terms-and-conditions/`}>
                  <h3>Termeni și condiții</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
