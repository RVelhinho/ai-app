import React from 'react'
import Fridge from './Fridge'
import Simulator from './Simulator';

export default function MainPage({temps, foods, recipes}) {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <Fridge temps={temps} foods={foods} recipes={recipes}/>
                    </div>
                    <div className="col-4">
                        <Simulator/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
