import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'
import SignUpPage from './signuppage';
import LandingPage from './landingpage/landingpage';
import S1HomePage from './site1/s1homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Route path="/signup" component={SignUpPage} exact/>
        <Route path="/landingpage" component={LandingPage} exact/>
        <Route path="/site1" component={S1HomePage} exact/>

      </React.Fragment>
        
       
      </BrowserRouter>
      
    );
  }
}

export default App;
