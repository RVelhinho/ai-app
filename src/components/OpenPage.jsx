import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faCheese } from "@fortawesome/free-solid-svg-icons";
import { faBacon } from "@fortawesome/free-solid-svg-icons";

class OpenPage extends Component {
  handleLeave = () => {
    this.props.history.push("/");
  };
  state = {
    foods: [
      { name: "Bacon", icon: faBacon },
      { name: "Fish", icon: faFish },
      { name: "Cheese", icon: faCheese },
    ],
  };
  createPlusMinusIcons(icon) {
    let final = icon === "+" ? faPlusCircle : faMinusCircle;
    let color = icon === "+" ? "#41ac58" : "#ff0000";
    let funcClick =
      icon === "+" ? this.props.onPlusClick : this.props.onMinusClick;
    let cols = [];
    this.state.foods.map((food, i) => {
      console.log(food.name, i, icon);
      cols.push(
        <div key={i} className="col d-flex justify-content-center mt-5">
          <FontAwesomeIcon
            icon={final}
            size="3x"
            className="icon"
            onClick={() => {
              funcClick(food.name);
            }}
            style={{ cursor: "pointer", color: color }}
          />
        </div>
      );
    });
    return cols;
  }

  createFood() {
    let cols = [];
    this.state.foods.map((food, index) =>
      cols.push(
        <div key={index} className="col d-flex justify-content-center mt-5">
          <FontAwesomeIcon
            icon={food.icon}
            size="3x"
            className="icon"
            //onClick={onPlusTemp}
          />
        </div>
      )
    );
    return cols;
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row initial-height">
            <div className="col-12 col-md-12 col-xl-8">
              <div className="row h-25">
                <div className="col d-flex justify-content-start mt-2">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="6x"
                    onClick={this.handleLeave}
                    style={{ cursor: "pointer" }}
                    className="icon"
                  />
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="col">
              <div className="row ">{this.createPlusMinusIcons("+")}</div>
              <div className="row ">{this.createFood()}</div>
              <div className="row ">{this.createPlusMinusIcons("-")}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OpenPage;
