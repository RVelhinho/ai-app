import React from "react";
import { faCheckSquare as farCS } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Checkmark({ check, onCheckClick }) {
    console.log("check", check);
    const classes = check
        ? { cursor: "pointer", color: "#44AA79" }
        : { cursor: "pointer", color: "#1a1a1a" };
    return (
        <React.Fragment>
            <FontAwesomeIcon
                icon={farCS}
                size="6x"
                onClick={onCheckClick}
                style={classes}
                className="icon"
            />
        </React.Fragment>
    );
}
