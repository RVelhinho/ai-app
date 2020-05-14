import React, { Component } from "react";
import Fridge from "./Fridge";
import OpenHelper from "./OpenHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

class OpenPage extends Component {
    handleLeave = () => {
        this.props.history.push("/");
        this.props.updateOrigFoods();
    };
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid initial-height">
                    <div className="row h-100">
                        <div className="col-12 col-md-12 col-xl-8 ">
                            <div className="row bg-dark h-100">
                                <div
                                    className="col"
                                    style={{
                                        opacity: "15%",
                                    }}
                                >
                                    <Fridge
                                        pageSize={this.props.pageSize}
                                        currentPage={this.props.currentPage}
                                        temps={this.props.temps}
                                        foods={this.props.foods}
                                        recipes={this.props.recipes}
                                        users={this.props.users}
                                        currentUser={this.props.currentUser}
                                        currentUserIndex={
                                            this.props.currentUserIndex
                                        }
                                        showUsers={this.props.showUsers}
                                        foodsLength={this.props.foodsLength}
                                        onClickFavorite={
                                            this.props.onClickFavorite
                                        }
                                        onPlusTemp={this.props.onPlusTemp}
                                        onMinusTemp={this.props.onMinusTemp}
                                        onShowUsers={this.props.onShowUsers}
                                        onChangeUser={this.props.onChangeUser}
                                        onNextPage={this.props.onNextPage}
                                        onPreviousPage={
                                            this.props.onPreviousPage
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-md-12 col-xl-8 initial-height"
                            style={{ position: "absolute" }}
                        >
                            <div className="row h-25 w-100">
                                <div className="col d-flex justify-content-start align-items-center">
                                    <FontAwesomeIcon
                                        icon={faArrowLeft}
                                        size="4x"
                                        onClick={this.handleLeave}
                                        style={{
                                            cursor: "pointer",
                                            color: "white",
                                        }}
                                        className="icon"
                                    />
                                </div>
                            </div>
                            <div className="row h-25 w-100">
                                <div className="col d-flex justify-content-center align-items-center">
                                    <h1 className="number2 text-light">
                                        Fridge door open
                                    </h1>
                                </div>
                            </div>
                            <div className="row h-25 w-100">
                                <div className="col d-flex justify-content-center align-items-center">
                                    <h1 className="text3 text-light">
                                        Don't let the cool air get outside!
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="col bg-dark">
                            <OpenHelper
                                onPlusClick={this.props.onPlusClick}
                                onMinusClick={this.props.onMinusClick}
                                updateOrigFoods={this.props.updateOrigFoods}
                                inventory={this.props.inventory}
                                orig={this.props.orig}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                temps={this.props.temps}
                                foods={this.props.foods}
                                recipes={this.props.recipes}
                                users={this.props.users}
                                currentUser={this.props.currentUser}
                                currentUserIndex={this.props.currentUserIndex}
                                showUsers={this.props.showUsers}
                                foodsLength={this.props.foodsLength}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OpenPage;
