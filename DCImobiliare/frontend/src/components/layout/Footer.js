import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
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
                    href="https://www.facebook.com/dany.chitu"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="fa-lg white-text mr-md-5 mr-3 fa-2x"
                    />
                  </a>
                  <a
                    className="ins-ic"
                    href="https://www.instagram.com/chitudaniel/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fa-lg white-text mr-md-5 mr-3 fa-2x"
                    />
                  </a>
                  <a className="google-ic" href="#">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className="fa-lg white-text mr-md-5 mr-3 fa-2x"
                    />
                  </a>
                </div>
                <div className="mt-3">
                  © Daviner Solutions 2019-2019. All rights reserved.
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
            <div className="col-md-6 footer-copyright text-center py-5">
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/dinosoftlabs"
                  title="DinosoftLabs"
                >
                  DinosoftLabs
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/those-icons"
                  title="Those Icons"
                >
                  Those Icons
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
              <div>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                >
                  Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
