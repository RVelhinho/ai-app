import React, { Component } from 'react'
import MainPage from "./MainPage"

class MainPageWrapper extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
<MainPage
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                temps={this.props.temps}
                foods={this.props.foods}
                recipes={this.props.recipes}
                users={this.props.users}
                currentUser={this.props.currentUser}
                currentUserIndex={this.props.currentUserIndex}
                showUsers={this.props.showUsers}
                foodsLength={this.props.foods.length}
                onClickFavorite={this.onClickFavorite}
                onPlusTemp={this.onPlusTemp}
                onMinusTemp={this.onMinusTemp}
                onShowUsers={this.onShowUsers}
                onChangeUser={this.onShowUsers}
                onNextPage={this.onNextPage}
                onPreviousPage={this.onPreviousPage}
                {...this.props}
              />
        </React.Fragment> );
    }
}
 
export default MainPageWrapper;