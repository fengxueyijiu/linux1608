import React, { Component } from 'react';
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import Home from './Home';
import User from './User';
import App from './App';
class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
          <Route path="/user/:_id" component={User} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
