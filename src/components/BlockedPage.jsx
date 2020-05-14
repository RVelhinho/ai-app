import React, { Component } from "react";
import Temperature from "./common/Temperature";
import UserBubble from "./common/UserBubble";
import { Link } from "react-router-dom";
import "./style/bubble.css";

class BlockedPage extends Component {
    state = {
        displayUsers: false,
    };
    handleUnlock = () => {
        let displayUsers = !this.state.displayUsers ? true : false;
        this.setState({ displayUsers });
    };
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid bg-dark">
                    <div className="row w-100 initial-height m-0">
                        <div className="col" onClick={this.handleUnlock}>
                            <div className="row h-50 w-100">
                                <div className="col d-flex justify-content-center align-items-end">
                                    <h1 className="text-light timeDisplay">
                                        {new Date().toTimeString().slice(0, 5)}
                                    </h1>
                                </div>
                            </div>
                            <div className="row h-50 w-100 d-flex justify-content-center align-items-start">
                                {this.props.temps.map((temp) => (
                                    <div
                                        key={temp.name}
                                        className="col col-md-6 col-xl-3"
                                    >
                                        <Temperature
                                            name={temp.name}
                                            temp={temp.degrees}
                                            onPlusTemp={() =>
                                                this.props.onPlusTemp(temp)
                                            }
                                            onMinusTemp={() =>
                                                this.props.onMinusTemp(temp)
                                            }
                                            buttons={false}
                                            color={"white"}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {this.state.displayUsers && (
                            <Link
                                to="/"
                                className="col-12 col-md-4 col-xl-4 d-flex justify-content-center align-items-center mr-4"
                            >
                                <UserBubble
                                    color={"white"}
                                    users={this.props.users}
                                    currentUser={this.props.currentUser}
                                    currentUserIndex={
                                        this.props.currentUserIndex
                                    }
                                    showUsers={true}
                                    onShowUsers={this.props.onShowUsers}
                                    onChangeUser={this.props.onChangeUser}
                                    blockedPage={true}
                                />
                            </Link>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BlockedPage;
