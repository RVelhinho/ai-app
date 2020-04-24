import React, { Component } from "react";
import Favorite from "./Favorite";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BubbleSep extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col bubble my-4">
                    <div className="row w-100 h-25 pl-4 py-3">
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
                            <div key={recipe.name} className="row">
                                <div className="col-6 d-flex justify-content-start align-items-center pl-md-5 pl-lg-5">
                                    <h5 className="textRecipe">
                                        {recipe.name}
                                    </h5>
                                </div>
                                <div className="col d-flex justify-content-end align-items-center pr-md-5 pr-lg-5">
                                    <Favorite
                                        favorite={recipe.favorite}
                                        onClickFavorite={() =>
                                            this.props.onClickFavorite(recipe)
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </React.Fragment>
        );
    }
}
