import React from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/bubble.css";

export default function Temperature({
    name,
    temp,
    onPlusTemp,
    onMinusTemp,
    buttons = true,
    color = "black",
}) {
    const tempStyle = color === "black" ? "number1" : "number2";
    const textStyle = color === "black" ? "text2" : "text3";
    const iconStyle = color === "black" ? "icon_temp" : "icon_temp2";
    return (
        <React.Fragment>
            <div className="row h-25 d-flex justify-content-center">
                <div className="col h-100 d-flex justify-content-center align-items-center">
                    <h3 className={textStyle} style={{ color }}>
                        {name}
                    </h3>
                </div>
            </div>
            <div className="row w-100 h-50 d-flex justify-content-center mt-4">
                <div className="col-3 d-flex justify-content-center">
                    <h3 className={tempStyle} style={{ color }}>
                        {temp}
                    </h3>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <FontAwesomeIcon
                        icon={faTemperatureLow}
                        size="4x"
                        style={{ color: "#3c72ff" }}
                        className={iconStyle}
                    />
                </div>
                {buttons ? (
                    <div className="col-3 mt-1">
                        <div className="row mb-2">
                            <div className="col">
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                    size="3x"
                                    className="icon_temp"
                                    onClick={onPlusTemp}
                                    style={{
                                        cursor: "pointer",
                                        color: "#41ac58",
                                    }}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <FontAwesomeIcon
                                    icon={faMinusCircle}
                                    size="3x"
                                    className="icon_temp"
                                    onClick={onMinusTemp}
                                    style={{
                                        cursor: "pointer",
                                        color: "#da4d5e",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </React.Fragment>
    );
}
