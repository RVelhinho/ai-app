import React from "react";
import "../style/bubble.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Bubble({ desc, icon }) {
    return (
        <React.Fragment>
            <Link
                to="/preferences"
                className="col bubble my-3 d-flex align-items-center justify-content-between"
                style={{
                    cursor: "pointer",
                    color: "#1a1a1a",
                    textDecoration: "none",
                }}
            >
                <div className="row w-100 pl-4">
                    <div className="col-8 d-flex align-items-center justify-content-start">
                        <h1 className="display-4">{desc}</h1>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <FontAwesomeIcon icon={icon} size="5x" />
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
}
