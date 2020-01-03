import React from 'react';
import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import Route from "react-router-dom/es/Route";
import { Switch } from "react-router-dom";

const HatsPage = props => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomepageComponent}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
