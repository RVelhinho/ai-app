import React from 'react'
import temperature from '../../assets/images/temperature.svg';

export default function Temperature({name, temp}) {
    return (
        <React.Fragment>
            <div className="row h-25">
                <div className="col d-flex justify-content-center">
                    <h1>{name}</h1>
                </div>
            </div>
            <div className="row h-75">
                <div className="col d-flex justify-content-end">
                    <h1 className='display-1'>{temp}</h1>
                </div>
                    <div className="col d-flex justify-content-start"><img src={temperature} alt='temperature'/></div>
            </div>
        </React.Fragment>
    )
}
