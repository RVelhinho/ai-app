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
    color = "black",
    blockedPage = false,
}) {
    const currentUserClass = blockedPage
        ? "col-12 d-flex align-items-center justify-content-center"
        : "col-12 col-md-8 col-xl-8 d-flex align-items-center justify-content-center justify-content-md-start justify-content-xl-start ";
    const textStyle = !blockedPage ? "text1" : "text4";
    const rowsClass = blockedPage
        ? "row w-100 d-flex justify-content-center align-items-center pl-4 my-3"
        : "row w-100 d-flex justify-content-start align-items-center pl-4 my-3";
    const colsClass = blockedPage
        ? "col-12 d-flex align-items-center justify-content-center"
        : "col-8 d-flex align-items-center justify-content-start";
    const classes = showUsers
        ? "col bubble mb-5 mb-sm-3 mb-md-3 mb-xl-3 mt-3"
        : "col bubble mb-5 mb-sm-3 mb-md-3 mb-xl-3 mt-3 d-flex align-items-center";
    let usersOld = [...users];
    usersOld.splice(currentUserIndex, 1);

    return (
        <React.Fragment>
            <div className={classes}>
                <div
                    className="row w-100 d-flex justify-content-center pl-4 my-3"
                    onClick={!blockedPage && onShowUsers}
                    style={{ cursor: "pointer" }}
                >
                    <div className={currentUserClass}>
                        <h1 className={textStyle} style={{ color }}>
                            {currentUser}
                        </h1>
                    </div>
                    {!blockedPage && (
                        <div className="col-12 col-md-4 col-xl-4 d-flex align-items-center justify-content-center justify-content-md-end justify-content-xl-end">
                            <FontAwesomeIcon
                                icon={faUser}
                                size="5x"
                                className="icon"
                            />
                            <OpenClose showUsers={showUsers} />
                        </div>
                    )}
                </div>
                {showUsers &&
                    usersOld.map((user) => (
                        <React.Fragment key={user.name}>
                            <hr className="my-3 separator2" />
                            <div
                                className={rowsClass}
                                onClick={() => onChangeUser(user.name)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className={colsClass}>
                                    <h1 className={textStyle} style={{ color }}>
                                        {user.name}
                                    </h1>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}{" "}
            </div>
        </React.Fragment>
    );
}
