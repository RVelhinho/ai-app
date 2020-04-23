import React, { Component } from 'react'
import Bubble from './common/Bubble';
import BubbleSep from './common/BubbleSep';
import Temperature from './common/Temperature';
import cogwheel from '../assets/images/settings.svg';
import user from '../assets/images/user.svg';
import meat from '../assets/images/meat.svg';
import fish from '../assets/images/fish.svg';
import cheese from '../assets/images/cheese.svg';
import carrot from '../assets/images/carrot.svg';
import pizza from '../assets/images/pizza.svg';
import apple from '../assets/images/apple.svg';
import chef from '../assets/images/chef.svg';
import next from '../assets/images/next.svg';
import previous from '../assets/images/previous.svg';
import full_bar from '../assets/images/full_bar.svg';
import almost_full_bar from '../assets/images/almost_full_bar.svg';
import almost_empty_bar from '../assets/images/almost_empty_bar.svg';
import empty_bar from '../assets/images/empty_bar.svg';
import dots from '../assets/images/dots.svg';
import './style/bubble.css';

export default class Fridge extends Component {
    chooseFood(name){
        if (name === 'Meat') return meat;
        else if (name === 'Fish') return fish;
        else if (name === 'Cheese') return cheese;
        else if (name === 'Carrot') return carrot;
        else if (name === 'Apple') return apple;
        return pizza;
    }
    chooseBar(quantity){
        if (quantity === 10) return full_bar;
        else if (quantity < 10 && quantity >= 5) return almost_full_bar;
        else if (quantity < 5 && quantity >=2) return almost_empty_bar;
        return empty_bar;
    }
    render() {
        const startingIndex = Math.floor(this.props.foodsLength/2);
        const array1 = this.props.foods.slice(0, startingIndex);
        const array2 = this.props.foods.slice(startingIndex);
        return (
            <React.Fragment>
            <div className="row h-100">
                <div className="col bubble my-3 ml-2">
                    <div className="row h-25 mt-2">
                        {this.props.temps.map(temp => <div className="col"><Temperature name={temp.name} temp={temp.degrees}/></div>)}
                    </div>
                    <hr className="separator"/>
                    <div className="row h-50 mt-5">
                        <div className="col d-flex justify-content-center">
                            <img src={previous} alt="previous"/>
                        </div>
                        <div className="col">
                            {array1.map(food => <React.Fragment>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-center"><h1>{food.name}</h1></div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col d-flex justify-content-center"><img src={this.chooseFood(food.name)}/></div>
                                                    <div className="col d-flex justify-content-center"><h1><img src={this.chooseBar(food.quantity)} alt='quantity'/></h1></div>
                                                </div>
                                                </React.Fragment>)}
                        </div>
                        <div className="col">
                            {array2.map(food => <React.Fragment>
                                                <div className="row">
                                                    <div className="col d-flex justify-content-center"><h1>{food.name}</h1></div>
                                                </div>
                                                <div className="row mb-3 ">
                                                    <div className="col d-flex justify-content-center"><img src={this.chooseFood(food.name)}/></div>
                                                    <div className="col d-flex justify-content-center"><h1><img src={this.chooseBar(food.quantity)} alt='quantity'/></h1></div>
                                                </div>
                                                </React.Fragment>)}
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img src={next} alt="next"/>
                        </div>
                    </div>
                    <div className="row row-dots">
                        <div className="col d-flex justify-content-center alig-items-center"><img src={dots}/></div>
                    </div>
                </div>
                <div className="col mx-2">
                    <div className="row h-25">
                        <Bubble desc="User" icon={user}/>
                    </div>
                    <div className="row h-50">
                        <BubbleSep desc="Recipes" icon={chef} recipes={this.props.recipes}/>
                    </div>
                    <div className="row h-25">
                        <Bubble desc="Preferences" icon={cogwheel}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}


