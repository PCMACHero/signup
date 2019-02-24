import React from 'react'


export default class CenterInfo extends React.Component{
    render(){
        return (
            <div className="lp-center-info-wrapper">
                <div className="lp-center-info-title" style={{fontSize:"2rem", color:"rgb(0, 185, 185)"}}>This is the info</div>
                <div className="lp-center-info-body">Blah blah blah, today! Only blah blah and more. You heard right, blah blah.</div>
            </div>
        )
    }
}