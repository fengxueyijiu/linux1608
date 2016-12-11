import React from 'react';
import { Router, Route, hashHistory ,IndexRoute,browserHistory} from 'react-router';
import Work from './Work';
import Home from './Home';
import FrontPage from './FrontPage';
import  Contact from './Contact';
class Routers extends React.Component {
  render() {
    return (
      // <Router history={browserHistory}>
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={FrontPage}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/work" component={Work} />
        </Route>
      </Router>
    );
  }
}

export default Routers;
