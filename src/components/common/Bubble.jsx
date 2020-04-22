import React from 'react'
import '../style/bubble.css';

export default function Bubble({desc, icon}) {
    return (
        <React.Fragment>
            <div className="col bubble my-3 d-flex justify-content-between align-items-center">
                <h1>{desc}</h1>
                <img src={icon} alt='desc'/>
            </div>
        </React.Fragment>
    )
}

