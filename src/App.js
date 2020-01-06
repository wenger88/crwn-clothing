import React from 'react';
import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import { Switch, Route } from "react-router-dom";
import ShopComponent from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomepageComponent}/>
        <Route path='/shop' component={ShopComponent}/>
      </Switch>
    </div>
  );
}

export default App;
