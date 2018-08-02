import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Layout from './Layout';
import SelectOptions from './SelectOptions';
import QR from './QR';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/select" component={SelectOptions} />
            <Route path="/qr" component={QR} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
