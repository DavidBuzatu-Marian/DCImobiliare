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
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 d-flex justify-content-center align-items-center">
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
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a
            href="https://mdbootstrap.com/education/bootstrap/"
            target="_blank"
          >
            {" "}
            David
          </a>
        </div>
      </footer>
    );
  }
}
