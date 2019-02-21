import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <SignUp title="SIGNUP" 
          greeting="Welcome to this thing! Your one-stop shop for all your blah blah blah. Blah blah, anytime."
          agreement="*You agree to let XYZ do such and such, and power of attorney, TOS, yada yada"
          />
      </div>
    );
  }
}

export default App;
