import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/bubble.css";

export default function Temperature({ name, temp, onPlusTemp, onMinusTemp }) {
    return (
        <React.Fragment>
            <div className="row h-25">
                <div className="col d-flex justify-content-center">
                    <h3>{name}</h3>
                </div>
            </div>
            <div className="row h-75">
                <div className="col d-flex justify-content-end">
                    <h1 className="display-1">{temp}</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <FontAwesomeIcon
                        icon={faTemperatureLow}
                        size="4x"
                        style={{ color: "#3c72ff" }}
                    />
                </div>
                <div className="col mt-1">
                    <div className="row mb-2">
                        <div className="col">
                            <FontAwesomeIcon
                                icon={faPlusCircle}
                                size="3x"
                                className="plus"
                                onClick={onPlusTemp}
                                style={{ cursor: "pointer", color: "#41ac58" }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <FontAwesomeIcon
                                icon={faMinusCircle}
                                size="3x"
                                className="minus"
                                onClick={onMinusTemp}
                                style={{ cursor: "pointer", color: "#da4d5e" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
