import React from 'react'
import FormField from './formfield';
import LeftCenter from './leftcenter';
import CenterInfo from './centerinfo';

export default class LandingPage extends React.Component{
    render(){
        return (
            <div className="lp-wrapper">
                <header className="lp-banner">THIS IS BANNER</header>
                <div className="lp-center-container">
                    <LeftCenter/>
                    <CenterInfo/>
                    <FormField/>
                </div>
                
                <footer className="lp-footer">THIS IS FOOTER</footer>
            </div>
        )
    }
}