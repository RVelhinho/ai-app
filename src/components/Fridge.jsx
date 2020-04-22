import React from 'react'
import Bubble from './common/Bubble';
import BubbleSep from './common/BubbleSep';
import Temperature from './common/Temperature';
import './style/bubble.css';
import cogwheel from '../assets/images/settings.svg';
import user from '../assets/images/user.svg';
import meat from '../assets/images/meat.svg';
import fish from '../assets/images/fish.svg';
import cheese from '../assets/images/cheese.svg';
import chef from '../assets/images/chef.svg';


export default function Fridge({temps, foods, recipes}) {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col bubble my-3">
                    <div className="row h-25">
    {temps.map(temp => <div className="col"><Temperature name={temp.name} temp={temp.degrees}/></div>)}
                    </div>
                    <hr className="my-3 separator"/>
                    <div className="row h-75">
                        <div className="col"></div>
                        <div className="col">
                            {foods.map(food => <React.Fragment>
                                                <div className="row">
                                                    <div className="col"><h1>{food.name}</h1></div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col"><img src={meat}/></div>
                                                    <div className="col"><h1>{food.quantity}</h1></div>
                                                </div>
                                                </React.Fragment>)}
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col mx-2">
                    <div className="row h-25">
                        <Bubble desc="User" icon={user}/>
                    </div>
                    <div className="row h-50">
                        <BubbleSep desc="Recipes" icon={chef} recipes={recipes}/>
                    </div>
                    <div className="row h-25">
                        <Bubble desc="Preferences" icon={cogwheel}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

