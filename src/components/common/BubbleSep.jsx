import React, { Component } from "react";
import Favorite from "./Favorite";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BubbleSep extends Component {
    render() {
        const classes = this.props.showUsers
            ? "col bubble mt-5 mb-3"
            : "col bubble mt-4 mb-3";
        return (
            <React.Fragment>
                <div className={classes}>
                    <div className="row w-100 pl-4 my-3">
                        <div className="col-7 col-xl-8 d-flex align-items-center justify-content-start justify-content-sm-center">
                            <h1 className="text1">{this.props.desc}</h1>
                        </div>
                        <div className="col-5 col-xl-4 d-flex align-items-center justify-content-end justify-content-sm-center">
                            <FontAwesomeIcon
                                icon={faBook}
                                size="5x"
                                className="icon"
                            />
                        </div>
                    </div>
                    {!this.props.showUsers && <hr className="my-3 separator" />}
                    {!this.props.showUsers &&
                        this.props.recipes.map((recipe) => (
                            <div key={recipe.name} className="row w-100">
                                <div className="col-7 col-sm-5 col-md-6 col-xl-7 d-flex justify-content-start align-items-center pl-md-5 pl-lg-5">
                                    <h5 className="textRecipe">
                                        {recipe.name}{" "}
                                    </h5>
                                </div>
                                <div className="col d-flex justify-content-end align-items-center">
                                    <Favorite
                                        favorite={recipe.favorite}
                                        onClickFavorite={() =>
                                            this.props.onClickFavorite(recipe)
                                        }
                                    />
                                </div>
                            </div>
                        ))}{" "}
                </div>
            </React.Fragment>
        );
    }
}
