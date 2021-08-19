import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullListing from './FullListing';
import LoginPage from './LoginPage';
import Post from './Post';
import NewPostPage from './NewPostPage';
import RegisterPage from "./RegisterPage";


//Renders the selected option
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={FullListing}/>
      <Route path='/listing/:id' component={Post}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/register' component={RegisterPage}/>
      <Route path='/NewPostPage' component={NewPostPage}/>
    </Switch>
  </main>
)

export default Main
