import React from 'react';
import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import SignInAndSignUpComponent from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/signin" component={SignInAndSignUpComponent} />
      </Switch>
    </div>
  );
}

export default App;
