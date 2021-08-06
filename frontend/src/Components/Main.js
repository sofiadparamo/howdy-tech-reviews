import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullListing from './FullListing'
import LoginPage from './LoginPage';
import Post from './Post'

//Renders the selected option
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={FullListing}/>
      <Route path='/listing/:id' component={Post}/>
      <Route path='/login' component={LoginPage}/>
    </Switch>
  </main>
)

export default Main
