import React from "react";
import Fridge from "./Fridge";
import Simulator from "./Simulator";
import "./style/bubble.css";

export default function MainPage({
    temps,
    foods,
    recipes,
    users,
    currentUser,
    currentUserIndex,
    showUsers,
    foodsLength,
    onClickFavorite,
    onPlusTemp,
    onMinusTemp,
    onShowUsers,
    onChangeUser,
}) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row initial-height">
                    <div className="col-8">
                        <Fridge
                            temps={temps}
                            foods={foods}
                            recipes={recipes}
                            users={users}
                            currentUser={currentUser}
                            currentUserIndex={currentUserIndex}
                            showUsers={showUsers}
                            foodsLength={foodsLength}
                            onClickFavorite={onClickFavorite}
                            onPlusTemp={onPlusTemp}
                            onMinusTemp={onMinusTemp}
                            onShowUsers={onShowUsers}
                            onChangeUser={onChangeUser}
                        />
                    </div>
                    <div className="divider"></div>
                    <div className="col">
                        <Simulator />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
