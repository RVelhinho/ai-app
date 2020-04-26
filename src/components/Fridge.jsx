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
    const pagesCount = Math.ceil(this.props.foodsLength / this.props.pageSize);
    if (this.props.foodsLength === 0) return <p>There is no food available</p>;

    const foods = paginate(
      this.props.foods,
      this.props.currentPage,
      this.props.pageSize
    );
    const foodsLength = foods.length;
    const startingIndex = Math.floor(foodsLength / 2);
    const array1 = foods.slice(0, startingIndex);
    const array2 = foods.slice(startingIndex);
    let UserBubbleClass = this.props.showUsers ? "row h-50" : "row h-25";
    let BubbleSepClass = this.props.showUsers ? "row h-25" : "row h-50";
    console.log(this.props.currentPage);
    return (
      <React.Fragment>
        <div className="row h-100">
          <div className="col-12 col-sm-7 col-md-6 col-xl-6 bubble my-3 mx-auto">
            <div className="row h-25 mt-3">
              {this.props.temps.map((temp) => (
                <div key={temp.name} className="col-6">
                  <Temperature
                    name={temp.name}
                    temp={temp.degrees}
                    onPlusTemp={() => this.props.onPlusTemp(temp)}
                    onMinusTemp={() => this.props.onMinusTemp(temp)}
                  />
                </div>
              ))}{" "}
            </div>
            <hr className="separator mt-0" />
            <div className="row h-50 w-100 mt-5 mx-auto">
              <div className="col-12  col-md-2 col-xl-1 order-3  order-md-1 order-xl-1 d-flex justify-content-start justify-content-md-center justify-content-xl-center align-items-center ">
                {this.props.currentPage > 1 && (
                  <FontAwesomeIcon
                    icon={faAngleDoubleLeft}
                    size="4x"
                    style={{
                      cursor: "pointer",
                      color: "#3c72ff",
                    }}
                    onClick={() => this.props.onPreviousPage()}
                    className="icon"
                  />
                )}{" "}
              </div>
              <div className="col-6 col-md-4 col-xl-5 order-1  order-md-2 order-xl-2">
                {array1.map((food) => (
                  <React.Fragment key={food.name}>
                    <div className="row">
                      <div className="col d-flex justify-content-center">
                        <h1 className="textFood">{food.name}</h1>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-7">
                        <FontAwesomeIcon
                          icon={this.chooseFood(food.name)}
                          size="3x"
                          className="icon"
                        />
                      </div>
                      <div className="col-1">
                        <h1>
                          <img
                            src={this.chooseBar(food.quantity)}
                            alt="quantity"
                            className="icon"
                          />
                        </h1>
                      </div>
                    </div>
                  </React.Fragment>
                ))}{" "}
              </div>
              <div className="col-6 col-md-4 col-xl-5 order-2  order-md-3 order-xl-3">
                {array2.map((food) => (
                  <React.Fragment key={food.name}>
                    <div className="row w-100">
                      <div className="col d-flex justify-content-center">
                        <h1 className="textFood">{food.name}</h1>
                      </div>
                    </div>
                    <div className="row mb-3 ">
                      <div className="col-7">
                        <FontAwesomeIcon
                          icon={this.chooseFood(food.name)}
                          size="3x"
                          className="icon"
                        />
                      </div>
                      <div className="col-1">
                        <h1>
                          <img
                            src={this.chooseBar(food.quantity)}
                            alt="quantity"
                            className="icon"
                          />
                        </h1>
                      </div>
                    </div>
                  </React.Fragment>
                ))}{" "}
              </div>
              <div className="col-12  col-md-2 col-xl-1 order-3 order-md-4 order-xl-4 d-flex justify-content-end justify-content-md-center justify-content-xl-center align-items-center">
                {this.props.currentPage < pagesCount && (
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    size="4x"
                    style={{
                      cursor: "pointer",
                      color: "#3c72ff",
                    }}
                    onClick={() => this.props.onNextPage()}
                    className="icon"
                  />
                )}{" "}
              </div>
            </div>
            <div className="row row-dots mt-5 mt-sm-3 mt-md-3 mt-xl-3">
              <div className="col d-flex justify-content-center alig-items-center">
                <Pagination
                  pagesCount={pagesCount}
                  currentPage={this.props.currentPage}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-5 col-xl-5 mx-auto">
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
                desc="Recipes"
                recipes={this.props.recipes}
                onClickFavorite={this.props.onClickFavorite}
                currentUser={this.props.currentUser}
                showUsers={this.props.showUsers}
              />
            </div>
            <div className="row h-25 ">
              <Bubble desc="Preferences" icon={faCog} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
