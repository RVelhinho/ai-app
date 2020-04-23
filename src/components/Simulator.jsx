import React, { Component } from 'react'
import mic from '../assets/images/mic.svg';
import door from '../assets/images/door.svg';

export default class Simulator extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row h-25 my-3">
                    <div className="col d-flex justify-content-center">
                        <h1>Simulator</h1>
                    </div>
                </div>
                <div className="row h-25">
                    <div className="col d-flex justify-content-center"><img src={mic} alt="mic"/></div>
                    <div className="col d-flex justify-content-center"><img src={door} alt="door"/></div>
                </div>
            </React.Fragment>
        )
    }
}
