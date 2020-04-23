import React, { Component } from "react";
import UserBubble from "./common/UserBubble";
import Bubble from "./common/Bubble";
import BubbleSep from "./common/BubbleSep";
import Temperature from "./common/Temperature";
import Pagination from "./common/Pagination";
import { paginate } from "./../utils/paginate";
import full_bar from "../assets/images/full_bar.svg";
import almost_full_bar from "../assets/images/almost_full_bar.svg";
import almost_empty_bar from "../assets/images/almost_empty_bar.svg";
import empty_bar from "../assets/images/empty_bar.svg";
import "./style/bubble.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrumstickBite } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faCheese } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faEgg } from "@fortawesome/free-solid-svg-icons";
import { faBacon } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

export default class Fridge extends Component {
    chooseFood(name) {
        if (name === "Meat") return faDrumstickBite;
        else if (name === "Fish") return faFish;
        else if (name === "Cheese") return faCheese;
        else if (name === "Carrot") return faCarrot;
        else if (name === "Apple") return faAppleAlt;
        else if (name === "Hamburguer") return faHamburger;
        else if (name === "Egg") return faEgg;
        else if (name === "Bacon") return faBacon;
        return faPizzaSlice;
    }
    chooseBar(quantity) {
        if (quantity === 10) return full_bar;
        else if (quantity < 10 && quantity >= 5) return almost_full_bar;
        else if (quantity < 5 && quantity >= 2) return almost_empty_bar;

        return empty_bar;
    }
    render() {
        const pagesCount = Math.ceil(
            this.props.foodsLength / this.props.pageSize
        );
        if (this.props.foodsLength === 0)
            return <p>There is no food available</p>;
        const foods = paginate(
            this.props.foods,
            this.props.currentPage,
            this.props.pageSize
        );
        const foodsLength = foods.length;
        const startingIndex = Math.floor(foodsLength / 2);
        const array1 = foods.slice(0, startingIndex);
        const array2 = foods.slice(startingIndex);
        let UserBubbleClass = this.props.showUsers
            ? "row h-50 pb-5"
            : "row h-25 pb-5";
        let BubbleSepClass = this.props.showUsers
            ? "row h-25 py-3"
            : "row h-50 py-3";
        console.log(this.props.currentPage);
        return (
            <React.Fragment>
                <div className="row h-100">
                    <div className="col bubble my-3 ml-3">
                        <div className="row h-25 mt-3">
                            {this.props.temps.map((temp) => (
                                <div key={temp.name} className="col">
                                    <Temperature
                                        name={temp.name}
                                        temp={temp.degrees}
                                        onPlusTemp={() =>
                                            this.props.onPlusTemp(temp)
                                        }
                                        onMinusTemp={() =>
                                            this.props.onMinusTemp(temp)
                                        }
                                    />
                                </div>
                            ))}{" "}
                        </div>
                        <hr className="separator mt-0" />
                        <div className="row h-50 mt-5">
                            <div className="col d-flex justify-content-center">
                                {this.props.currentPage > 1 && (
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleLeft}
                                        size="4x"
                                        style={{
                                            cursor: "pointer",
                                            color: "#3c72ff",
                                        }}
                                        onClick={() =>
                                            this.props.onPreviousPage()
                                        }
                                    />
                                )}
                            </div>
                            <div className="col">
                                {array1.map((food) => (
                                    <React.Fragment key={food.name}>
                                        <div className="row">
                                            <div className="col d-flex justify-content-center">
                                                <h1>{food.name}</h1>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col d-flex justify-content-center">
                                                <FontAwesomeIcon
                                                    icon={this.chooseFood(
                                                        food.name
                                                    )}
                                                    size="3x"
                                                />
                                            </div>
                                            <div className="col d-flex justify-content-center">
                                                <h1>
                                                    <img
                                                        src={this.chooseBar(
                                                            food.quantity
                                                        )}
                                                        alt="quantity"
                                                    />
                                                </h1>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}{" "}
                            </div>
                            <div className="col">
                                {array2.map((food) => (
                                    <React.Fragment key={food.name}>
                                        <div className="row">
                                            <div className="col d-flex justify-content-center">
                                                <h1>{food.name}</h1>
                                            </div>
                                        </div>
                                        <div className="row mb-3 ">
                                            <div className="col d-flex justify-content-center">
                                                <FontAwesomeIcon
                                                    icon={this.chooseFood(
                                                        food.name
                                                    )}
                                                    size="3x"
                                                />
                                            </div>
                                            <div className="col d-flex justify-content-center">
                                                <h1>
                                                    <img
                                                        src={this.chooseBar(
                                                            food.quantity
                                                        )}
                                                        alt="quantity"
                                                    />
                                                </h1>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}{" "}
                            </div>
                            <div className="col d-flex justify-content-center">
                                {this.props.currentPage < pagesCount && (
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        size="4x"
                                        style={{
                                            cursor: "pointer",
                                            color: "#3c72ff",
                                        }}
                                        onClick={() => this.props.onNextPage()}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="row row-dots">
                            <div className="col d-flex justify-content-center alig-items-center">
                                <Pagination
                                    pagesCount={pagesCount}
                                    currentPage={this.props.currentPage}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col mx-3">
                        <div className={UserBubbleClass}>
                            <UserBubble
                                users={this.props.users}
                                currentUser={this.props.currentUser}
                                currentUserIndex={this.props.currentUserIndex}
                                showUsers={this.props.showUsers}
                                onShowUsers={this.props.onShowUsers}
                                onChangeUser={this.props.onChangeUser}
                            />
                        </div>
                        <div className={BubbleSepClass}>
                            <BubbleSep
                                desc="Recommended Recipes"
                                recipes={this.props.recipes}
                                onClickFavorite={this.props.onClickFavorite}
                                currentUser={this.props.currentUser}
                                showUsers={this.props.showUsers}
                            />
                        </div>
                        <div className="row h-25 pt-5">
                            <Bubble desc="Preferences" icon={faCog} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
