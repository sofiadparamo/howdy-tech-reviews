import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FullListing from './FullListing'
import Post from './Post'

import LoginPage from './LoginPage';

//Renders the selected option
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={FullListing}/>
      <Route path='listing/:productName' component={Post}/>
      <Route path='/login' component={LoginPage}/>
    </Switch>
  </main>
)

export default Main
