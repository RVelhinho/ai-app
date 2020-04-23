import React from "react";
import OpenClose from "./OpenClose";
import "../style/bubble.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserBubble({
    users,
    currentUser,
    currentUserIndex,
    showUsers,
    onShowUsers,
    onChangeUser,
}) {
    let usersOld = [...users];
    usersOld.splice(currentUserIndex, 1);
    return (
        <React.Fragment>
            <div className="col bubble my-3">
                <div
                    className="row w-100 pl-4 my-5 "
                    onClick={onShowUsers}
                    style={{ cursor: "pointer" }}
                >
                    <div className="col-8 d-flex align-items-center justify-content-start">
                        <h1 className="display-4">{currentUser}</h1>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <FontAwesomeIcon icon={faUser} size="5x" />
                        <OpenClose showUsers={showUsers} />
                    </div>
                </div>
                {showUsers &&
                    usersOld.map((user) => (
                        <React.Fragment key={user.name}>
                            <hr className="my-3 separator2" />
                            <div
                                className="row w-100 pl-4 my-3"
                                onClick={() => onChangeUser(user.name)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="col-8 d-flex align-items-center justify-content-start">
                                    <h1 className="display-4">{user.name}</h1>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}{" "}
            </div>
        </React.Fragment>
    );
}
