import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Signin from './Signin';
import Welcome from './Welcome';
class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <div>
          <Route exact path='/' component={Signin}/>
          <Route exact path='/welcome' component={Welcome}/>
          </div>
      </Router>
      </div>
    );
  }
}

export default App;
