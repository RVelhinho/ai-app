import React from "react";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/bubble.css";

export default function Favorite({ favorite, onClickFavorite }) {
    let classes = farStar;
    if (favorite) classes = fasStar;
    return (
        <FontAwesomeIcon
            icon={classes}
            size="3x"
            onClick={onClickFavorite}
            style={{ cursor: "pointer", color: "#e5ea03" }}
        />
    );
}
