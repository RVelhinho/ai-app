import React from 'react'
import Fridge from './Fridge'
import Simulator from './Simulator';
import './style/bubble.css';

export default function MainPage({temps, foods, recipes, foodsLength}) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center initial-height">
                    <div className="col-8">
                        <Fridge temps={temps} foods={foods} recipes={recipes} foodsLength={foodsLength}/>
                    </div>
                    <div className="divider">
                    </div>
                    <div className="col-3">
                        <Simulator/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
