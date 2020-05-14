import React, { Component } from "react";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import Temperature from "./common/Temperature";
import UserBubble from "./common/UserBubble";
import { useLocation, Link } from "react-router-dom";

class BlockedPage extends Component {
  state = {
    displayUsers: "none",
  };
  handleUnlock = () => {
    console.log("oiii", this.state);
    let displayUsers = this.state.displayUsers === "flex" ? "none" : "flex";
    this.setState({ displayUsers });
    console.log(this.state, displayUsers, this.props.path);
  };
  renderButtonLogin = () => {
    let display = this.state.displayUsers;
    if (this.props.showUsers) {
      display = "none";
    }
    return (
      <div className="row h-10" style={{ display }}>
        <Link to="/" className="col d-flex">
          <div
            className="col "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="btn btn-success"
              style={{ height: "100%", width: "10%" }}
            >
              Login
            </button>
          </div>
        </Link>
      </div>
    );
  };
  renderUsers = () => {
    let UserBubbleClass = this.props.showUsers ? "row h-50" : "row h-25";
    return (
      <div
        className={UserBubbleClass}
        style={{ display: this.state.displayUsers }}
      >
        <div
          className="col-4"
          style={{
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <UserBubble
            color={"white"}
            users={this.props.users}
            currentUser={this.props.currentUser}
            currentUserIndex={this.props.currentUserIndex}
            showUsers={this.props.showUsers}
            onShowUsers={this.props.onShowUsers}
            onChangeUser={this.props.onChangeUser}
          />
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <div
          onClick={this.handleUnlock}
          style={{
            backgroundColor: "black",
            height: "100vh",
          }}
        >
          <div className="row">
            <div className="col ">
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: "900%",
                }}
              >
                {new Date().toTimeString().slice(0, 5)}
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            {this.props.temps.map((temp) => (
              <div key={temp.name} className="col-3 m-auto">
                <Temperature
                  name={temp.name}
                  temp={temp.degrees}
                  onPlusTemp={() => this.props.onPlusTemp(temp)}
                  onMinusTemp={() => this.props.onMinusTemp(temp)}
                  buttons={false}
                  color={"white"}
                />
              </div>
            ))}{" "}
          </div>
          {this.renderUsers()}
          {this.renderButtonLogin()}
        </div>
      </React.Fragment>
    );
  }
}

export default BlockedPage;
