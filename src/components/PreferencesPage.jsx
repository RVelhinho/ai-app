import React, { Component } from "react";
import Checkmark from "./common/Checkmark";
import "./style/bubble.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class PreferencesPage extends Component {
    handleLeave = () => {
        this.props.history.push("/");
    };
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row initial-height">
                        <div className="col">
                            <div className="row h-25">
                                <div className="col d-flex justify-content-start mt-2">
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        size="6x"
                                        onClick={this.handleLeave}
                                        style={{ cursor: "pointer" }}
                                    />
                                </div>
                            </div>
                            {this.props.preferences.map((pref) => (
                                <div
                                    key={pref.desc}
                                    className="row w-75 my-4 mx-auto"
                                >
                                    <div className="col-8 d-flex justify-content-start align-items-center">
                                        <h2>{pref.desc}</h2>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <Checkmark
                                            check={pref.check}
                                            onCheckClick={() =>
                                                this.props.onCheckClick(pref)
                                            }
                                            style={{ cursor: "pointer" }}
                                        />
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
