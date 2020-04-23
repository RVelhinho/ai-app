import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import { getTemp } from "./services/fakeTempService";
import { getFood } from "./services/fakeFoodService";
import { getRecipes } from "./services/fakeRecipeService";
import { getUsers } from "./services/fakeUserService";

export default class App extends Component {
    state = {
        temps: [],
        foods: [],
        recipesOriginal: [],
        recipes: [],
        users: [],
        currentUser: "",
        currentUserIndex: 0,
        showUsers: false,
    };

    componentDidMount() {
        const temps = getTemp();
        const foods = getFood();
        const recipes = getRecipes();
        const users = getUsers();
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
            currentUser,
            currentUserIndex,
        });
    }

    handleOnClickFavorite = (recipe) => {
        const recipes = [...this.state.recipes];
        const index = recipes.indexOf(recipe);
        recipes[index] = { ...recipes[index] };
        recipes[index].favorite = !recipes[index].favorite;
        this.setState({ recipes });
    };
    handlePlusTemp = (temp) => {
        const temps = [...this.state.temps];
        const index = temps.indexOf(temp);
        temps[index] = { ...temps[index] };
        temps[index].degrees++;
        this.setState({ temps });
    };
    handleMinusTemp = (temp) => {
        const temps = [...this.state.temps];
        const index = temps.indexOf(temp);
        temps[index] = { ...temps[index] };
        temps[index].degrees--;
        this.setState({ temps });
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
        console.log("current index", currentUserIndex);
        this.setState({
            currentUser,
            currentUserIndex,
            recipes: this.state.recipesOriginal[currentUserIndex].recipes,
            showUsers: !this.state.showUsers,
        });
    };
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/not-found" component={NotFound} />
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <MainPage
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
