import React, {Component} from 'react'
import SignUp from './components/signup';


export default class SignUpPage extends Component{

    render(){
        return (
            
            <div className="App">
                <SignUp title="SIGNUP" 
                greeting="Welcome to this thing! Your one-stop shop for all your blah blah blah. Blah blah, anytime."
                agreement="*You agree to let XYZ do such and such, and power of attorney, TOS, yada yada"
                />
            </div>
        )
    }
}