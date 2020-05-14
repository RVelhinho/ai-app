import React, { Component } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faCheese } from "@fortawesome/free-solid-svg-icons";
import { faBacon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import "./style/bubble.css";

export default class OpenHelper extends Component {
    state = {
        foods: [
            { name: "Bacon", icon: faBacon },
            { name: "Fish", icon: faFish },
            { name: "Cheese", icon: faCheese },
        ],
        r: JSON.parse(JSON.stringify(this.props.inventory)),
    };
    openFridgeText = {
        color: "white",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        whiteSpace: "nowrap",
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
                <div key={i} className="col d-flex justify-content-center">
                    <FontAwesomeIcon
                        icon={final}
                        size="3x"
                        className="icon"
                        color="white"
                        onClick={() => {
                            funcClick(food.name);
                        }}
                        style={{
                            cursor: "pointer",
                            color: color,
                        }}
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
                <div
                    key={index}
                    className="col d-flex justify-content-center my-2"
                >
                    <FontAwesomeIcon
                        icon={food.icon}
                        size="3x"
                        className="icon"
                        color="white"
                        //onClick={onPlusTemp}
                    />
                </div>
            )
        );
        return cols;
    }
    createHelper() {
        let rows = [];
        this.state.foods.map((food, index) =>
            rows.push(
                <div key={index} className="row d-flex justify-content-center">
                    <div className="col-2 d-flex justify-content-center">
                        <FontAwesomeIcon
                            icon={food.icon}
                            size="3x"
                            className="icon"
                            color="white"
                            //onClick={onPlusTemp}
                        />
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <h2 className="text-light">:</h2>
                    </div>
                    <div className="col-2 d-flex justify-content-center">
                        <h2 className="text-light">
                            {this.getChange(food.name)}
                        </h2>
                    </div>
                </div>
            )
        );
        return rows;
    }
    getChange(name) {
        let curQuantity;
        for (let food of this.props.inventory) {
            if (food.name === name) {
                curQuantity = food.quantity;
            }
        }

        let origQuantity;
        console.log("pgf", this.props.orig);
        for (let food in this.props.orig) {
            console.log("pga", food);
            if (this.props.orig[food].name === name) {
                origQuantity = this.props.orig[food].quantity;
            }
        }
        console.log("pgff", origQuantity, curQuantity);
        // const inventoryO = this.props.orig[origIndex];
        let diff = curQuantity - origQuantity;
        // let diff = inventoryQ - inventoryO;
        return diff === 0 ? "No change" : diff > 0 ? "+" + diff : diff;
    }
    //filter: "grayscale(50%)",
    render() {
        return (
            <React.Fragment>
                <div className="row mt-5">{this.createPlusMinusIcons("+")}</div>
                <div className="row">{this.createFood()}</div>
                <div className="row">{this.createPlusMinusIcons("-")}</div>
                <div className="row mt-5 mb-3 d-flex justify-content-center">
                    <h1 className="text-light text1">Helper:</h1>
                </div>
                {this.createHelper()}
            </React.Fragment>
        );
    }
}
