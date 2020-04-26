import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import soundWave from "../assets/images/soundwave.svg";

class ListeningPage extends Component {
  handleLeave = () => {
    this.props.history.push("/");
  };
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row initial-height">
            <div className="col-12 col-md-12 col-xl-8">
              <div className="row h-25">
                <div className="col d-flex justify-content-start mt-2">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="6x"
                    onClick={this.handleLeave}
                    style={{ cursor: "pointer" }}
                    className="icon"
                  />
                </div>
              </div>
              <div className="col text-center">
                <h1 style={{ fontSize: 100 }}>I'm Listening!</h1>
              </div>
              <div className="text-center">
                <img src={soundWave} alt="Soundwave" />
              </div>
            </div>
            <div className="divider"></div>
            <div className="col">
              {this.props.voiceCommands.map((voiceC) => (
                <div
                  key={voiceC.desc}
                  className="row h-25 mx-auto mt-2"
                  style={{
                    cursor: "pointer",
                    color: "#1a1a1a",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    this.props.onCommandClick(voiceC);
                  }}
                >
                  <div className="col bubble d-flex text-center align-items-center ">
                    <h4>{voiceC.desc}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListeningPage;
