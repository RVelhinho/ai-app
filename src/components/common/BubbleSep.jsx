import React, { Component } from "react";
import Favorite from "./Favorite";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BubbleSep extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col bubble">
                    <div className="row">
                        <div className="col my-3 d-flex align-items-center justify-content-between">
                            <div className="row w-100 pl-4">
                                <div className="col-8 d-flex align-items-center justify-content-start">
                                    <h1 className="display-4">
                                        {this.props.desc}
                                    </h1>
                                </div>
                                <div className="col d-flex align-items-center justify-content-end">
                                    <FontAwesomeIcon icon={faBook} size="5x" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {!this.props.showUsers && <hr className="my-3 separator" />}
                    {!this.props.showUsers && (
                        <div className="row">
                            <div className="col">
                                {this.props.recipes.map((recipe) => (
                                    <div key={recipe.name} className="row">
                                        <div className="col d-flex justify-content-start align-items-center pl-5">
                                            <h5>{recipe.name}</h5>
                                        </div>
                                        <div className="col d-flex justify-content-end align-items-center pr-5">
                                            <Favorite
                                                favorite={recipe.favorite}
                                                onClickFavorite={() =>
                                                    this.props.onClickFavorite(
                                                        recipe
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    }
}
