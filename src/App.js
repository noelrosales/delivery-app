import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Parcel from './components/Parcel';
import Manifest from './components/Manifest';
import Receive from './components/Receive';
import Claim from './components/Claim';
import History from './components/History';

import Navbar from './components/Navbar';
import Login from './components/Login';
import NotFound from './components/404';
import PrivateRoute from './components/hoc/PrivateRoute';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/parcel' component={Parcel}/>
          <PrivateRoute path='/manifest' component={Manifest}/>
          <PrivateRoute path='/receive' component={Receive}/>
          <PrivateRoute path='/claim' component={Claim}/>
          <PrivateRoute path='/history' component={History}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
