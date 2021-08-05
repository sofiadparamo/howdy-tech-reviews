import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

//Renders the selected option
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/login' component={LoginPage}/>
    </Switch>
  </main>
)

export default Main
