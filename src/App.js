import React, { Component } from 'react';
import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import SignInAndSignUpComponent from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomepageComponent} />
          <Route path="/shop" component={ShopComponent} />
          <Route path="/signin" component={SignInAndSignUpComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
