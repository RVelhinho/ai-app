import React from "react";
import "../style/bubble.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bubble({ desc, icon }) {
    return (
        <React.Fragment>
            <div className="col bubble my-3 d-flex align-items-center justify-content-between">
                <div className="row w-100 pl-4">
                    <div className="col-8 d-flex align-items-center justify-content-start">
                        <h1 className="display-4">{desc}</h1>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <FontAwesomeIcon icon={icon} size="5x" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
