import React, { Component } from "react";
import mic from "../assets/images/mic.svg";
import door from "../assets/images/door.svg";
import back from "../assets/images/arrow-left-solid.svg";

import { Link } from "react-router-dom";

export default class Simulator extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row h-25 my-3">
          <div className="col d-flex justify-content-center">
            <h1>Simulator</h1>
          </div>
        </div>
        <div className="row h-25">
          <Link to="/listening" className="col d-flex">
            <div className="col d-flex justify-content-center">
              <img src={mic} alt="mic" />
            </div>
          </Link>
          <Link to="/open" className="col d-flex">
            <div className="col d-flex justify-content-center">
              <img src={door} alt="door" />
            </div>
          </Link>
          <Link to="/blocked" className="col d-flex">
            <div className="col d-flex justify-content-center">
              <img src={back} alt="blocked" />
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
