import React from "react";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OpenClose({ showUsers }) {
    const classes = showUsers ? faSortUp : faSortDown;
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={classes} size="3x" />
        </React.Fragment>
    );
}
