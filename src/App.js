import React from 'react';
import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopComponent from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/shop" component={ShopComponent} />
      </Switch>
    </div>
  );
}

export default App;
