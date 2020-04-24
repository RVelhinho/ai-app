import React from "react";
import "../style/bubble.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Bubble({ desc, icon }) {
    return (
        <React.Fragment>
            <Link
                to="/preferences"
                className="col bubble d-flex align-items-center"
                style={{
                    cursor: "pointer",
                    color: "#1a1a1a",
                    textDecoration: "none",
                }}
            >
                <div className="row w-100 pl-4 py-2">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start">
                        <h1 className="text1">{desc}</h1>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center justify-content-md-end justify-content-lg-end">
                        <FontAwesomeIcon
                            icon={icon}
                            size="5x"
                            className="icon"
                        />
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
}
