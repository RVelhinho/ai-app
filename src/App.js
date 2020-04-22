import React, { Component } from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import MainPage from './components/MainPage';
import NotFound from './components/NotFound';
import { getTemp } from './services/fakeTempService'
import { getFood } from './services/fakeFoodService';
import { getRecipes } from './services/fakeRecipeService';


export default class App extends Component {
  state = {
    temps: [],
    foods: [],
    recipes: []
  }

  componentDidMount() {
      const temps = getTemp();
      const foods = getFood();
      const recipes = getRecipes();
      this.setState({temps, foods, recipes});
  }
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/not-found' component={NotFound}/>
          <Route path='/' exact render={(props) => <MainPage temps={this.state.temps} foods={this.state.foods} recipes={this.state.recipes} {...props}/>}/>
          <Redirect to='not-found'/>
        </Switch>
      </React.Fragment>
    )
  }
}

