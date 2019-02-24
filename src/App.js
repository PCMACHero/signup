import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom'
import SignUpPage from './signuppage';
import LandingPage from './landingpage/landingpage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Route path="/signup" component={SignUpPage} exact/>
        <Route path="/landingpage" component={LandingPage} exact/>

      </React.Fragment>
        
       
      </BrowserRouter>
      
    );
  }
}

export default App;
