import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullListing from './FullListing'
import Post from './Post

const Listing = () => (
  <Switch>
    <Route exact path="/listing" component={FullListing}/>
    <Route path='/listing/:id' component={Post}/>
  </Switch>
)

export default Listing
