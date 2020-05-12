import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage";
import PreferencesPage from "./components/PreferencesPage";
import NotFound from "./components/NotFound";
import { getTemp } from "./services/fakeTempService";
import { getFood } from "./services/fakeFoodService";
import { getRecipes } from "./services/fakeRecipeService";
import { getUsers } from "./services/fakeUserService";
import { getPreferences } from "./services/fakePreferenceService";
import ListeningPage from "./components/ListeningPage";
import { getVoiceCommands } from "./services/voiceCommands";
import OpenPage from "./components/OpenPage";

export default class App extends Component {
  state = {
    pageSize: 6,
    currentPage: 1,
    temps: [],
    foods: [],
    recipesOriginal: [],
    recipes: [],
    users: [],
    preferences: [],
    currentUser: "",
    currentUserIndex: 0,
    showUsers: false,
    voiceCommands: [],
    recipesUpdating: [],
    preferencesByUser: [],
  };

  componentDidMount() {
    const temps = getTemp();
    const foods = getFood();
    const recipes = getRecipes();
    const users = getUsers();
    const preferences = getPreferences();
    const voiceCommands = getVoiceCommands();
    const origfoods = [...foods];
    let currentUser = users[0].name;
    let currentUserIndex = 0;
    for (let user of recipes) {
      if (user.name === currentUser) {
        currentUserIndex = recipes.indexOf(user);
      }
    }
    this.setState({
      temps,
      foods,
      recipesOriginal: recipes,
      recipes: recipes[currentUserIndex].recipes,
      users,
      preferences,
      currentUser,
      currentUserIndex,
      voiceCommands,
      recipesUpdating: recipes,
      origfoods,
    });
  }

  handleOnClickFavorite = (recipe) => {
    const recipes = [...this.state.recipes];
    const index = recipes.indexOf(recipe);
    recipes[index] = {
      ...recipes[index],
    };
    recipes[index].favorite = !recipes[index].favorite;
    this.setState({ recipes });
  };
  handlePlusTemp = (temp) => {
    const temps = [...this.state.temps];
    const index = temps.indexOf(temp);
    temps[index] = {
      ...temps[index],
    };
    temps[index].degrees++;
    this.setState({ temps });
  };
  handleMinusTemp = (temp) => {
    const temps = [...this.state.temps];
    const index = temps.indexOf(temp);
    temps[index] = {
      ...temps[index],
    };
    temps[index].degrees--;
    this.setState({ temps });
  };
  handleUpdateOrigFoods = () => {
    const origfoods = [...this.state.foods];
    this.setState({ origfoods });
  };
  handleShowUsers = () => {
    const showUsers = !this.state.showUsers;
    this.setState({ showUsers });
  };
  handleChangeUser = (name) => {
    const currentUser = name;
    let currentUserIndex = 0;
    for (let user of this.state.recipesOriginal) {
      console.log(user);
      if (user.name === currentUser) {
        currentUserIndex = this.state.recipesOriginal.indexOf(user);
      }
    }
    const recipesUpdating = [...this.state.recipesUpdating];
    const oldUserIndex = this.state.currentUserIndex;
    recipesUpdating[oldUserIndex].recipes = this.state.recipes;

    const oldPreferences = this.state.preferences;
    const preferencesByUser = [...this.state.preferencesByUser];
    const oldPreferencesInfo = {
      name: this.state.currentUser,
      preferences: oldPreferences,
    };
    let found = false;
    let prefOldIndex;
    for (let user of preferencesByUser) {
      if (user.name === oldPreferencesInfo.name) {
        prefOldIndex = preferencesByUser.indexOf(user);
        found = true;
      }
    }
    if (found) {
      preferencesByUser[prefOldIndex] = oldPreferencesInfo;
    } else {
      preferencesByUser.push(oldPreferencesInfo);
    }

    found = false;
    let prefCurIndex;
    for (let user of preferencesByUser) {
      if (user.name === currentUser) {
        prefCurIndex = preferencesByUser.indexOf(user);
        found = true;
      }
    }
    let preferences = found
      ? preferencesByUser[prefCurIndex].preferences
      : getPreferences();

    console.log("current index", currentUserIndex);
    this.setState({
      currentUser,
      currentUserIndex,
      recipes: this.state.recipesUpdating[currentUserIndex].recipes,
      showUsers: !this.state.showUsers,
      recipesUpdating,
      preferencesByUser,
      preferences,
    });
  };
  handleNextPage = () => {
    let currentPage = this.state.currentPage;
    currentPage++;
    this.setState({ currentPage });
  };
  handlePreviousPage = () => {
    let currentPage = this.state.currentPage;
    currentPage--;
    this.setState({ currentPage });
  };
  handleCheckClick = (pref) => {
    const preferences = [...this.state.preferences];
    const index = preferences.indexOf(pref);
    preferences[index] = {
      ...preferences[index],
    };
    preferences[index].check = !preferences[index].check;
    this.setState({ preferences });
  };
  handleVoiceCommand = (command) => {
    console.log("I'm herere", command.preference);
    const preferences = [...this.state.preferences];
    this.handleCheckClick(preferences[command.preference]);
  };
  handlePlusFood = (food) => {
    const foods = [...this.state.foods];
    let index;
    for (let foodInfo of foods) {
      if (foodInfo.name === food) {
        index = foods.indexOf(foodInfo);
      }
    }
    foods[index] = {
      ...foods[index],
    };
    console.log(index);
    foods[index].quantity++;
    console.log("foods", foods, food);
    this.setState({ foods });
  };
  handleMinusFood = (food) => {
    const foods = [...this.state.foods];
    let index;
    for (let foodInfo of foods) {
      if (foodInfo.name === food) {
        index = foods.indexOf(foodInfo);
      }
    }
    foods[index] = {
      ...foods[index],
    };
    console.log(index);
    foods[index].quantity--;
    console.log("foods", foods, food);
    this.setState({ foods });
  };
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/preferences"
            render={(props) => (
              <PreferencesPage
                preferences={this.state.preferences}
                onCheckClick={this.handleCheckClick}
                {...props}
              />
            )}
          />
          <Route
            path="/listening"
            render={(props) => (
              <ListeningPage
                voiceCommands={this.state.voiceCommands}
                onCommandClick={this.handleVoiceCommand}
                {...props}
              />
            )}
          />
          <Route
            path="/open"
            render={(props) => (
              <OpenPage
                onPlusClick={this.handlePlusFood}
                onMinusClick={this.handleMinusFood}
                updateOrigFoods={this.handleUpdateOrigFoods}
                inventory={this.state.foods}
                orig={this.state.origfoods}
                {...props}
              />
            )}
          />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/"
            exact
            render={(props) => (
              <MainPage
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                temps={this.state.temps}
                foods={this.state.foods}
                recipes={this.state.recipes}
                users={this.state.users}
                currentUser={this.state.currentUser}
                currentUserIndex={this.state.currentUserIndex}
                showUsers={this.state.showUsers}
                foodsLength={this.state.foods.length}
                onClickFavorite={this.handleOnClickFavorite}
                onPlusTemp={this.handlePlusTemp}
                onMinusTemp={this.handleMinusTemp}
                onShowUsers={this.handleShowUsers}
                onChangeUser={this.handleChangeUser}
                onNextPage={this.handleNextPage}
                onPreviousPage={this.handlePreviousPage}
                {...props}
              />
            )}
          />
          <Redirect to="not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}
