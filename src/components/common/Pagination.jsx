import React, { Component } from "react";
import _ from "lodash";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Pagination extends Component {
    chooseColor = (item) => {
        if (item === this.props.currentPage) {
            return { color: "#3c72ff" };
        }
        return { color: "#1a1a1a" };
    };
    render() {
        const pages = _.range(1, this.props.pagesCount + 1);
        console.log(pages);
        return (
            <React.Fragment>
                {pages.map((item) => (
                    <FontAwesomeIcon
                        key={item}
                        icon={faCircle}
                        size="3x"
                        style={this.chooseColor(item)}
                    />
                ))}
            </React.Fragment>
        );
    }
}
