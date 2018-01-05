import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Signin from './Signin';
import Welcome from './Welcome';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <div>
          <Switch>
          <Route exact path='/' component={Signin}/>
          <Route exact path='/welcome' component={Welcome}/>
          <Route component={NotFound}/>
          </Switch>


          </div>
      </Router>
      </div>
    );
  }
}

export default App;
