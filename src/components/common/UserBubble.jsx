import React from "react";
import "../style/bubble.css";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
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
                        <FontAwesomeIcon icon={faSortDown} size="3x" />
                    </div>
                </div>
                {showUsers &&
                    usersOld.map((user) => (
                        <React.Fragment key={user.name}>
                            <hr className="my-3" />
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
                    ))}
            </div>
        </React.Fragment>
    );
}
