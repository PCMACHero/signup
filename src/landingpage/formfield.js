import React from 'react'
import './landingpage.css'


export default class FormField extends React.Component{
    render(){
        return (
            <form className="form-field-wrapper" onSubmit={()=>{
                console.log("hello")
            }} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"flex-start", width:"320px", boxShadow:"1px 3px 10px grey", margin:"10px", padding:"20px"}}>
                <label className="form-field-label" htmlFor="form-field-fname-input">First*</label>
                <input className="form-field-input" type="text" name="fname" id="form-field-fname-input" required/>
                <label className="form-field-label" htmlFor="form-field-name-input">Last*</label>
                <input className="form-field-input" type="text" name="lname" id="form-field-lname-input" required/>
                <label className="form-field-label" htmlFor="form-field-tel-input">Phone*</label>
                <input className="form-field-input" type="tel" name="tel" id="form-field-tel-input"/>
                <label className="form-field-label" htmlFor="form-field-email-input">Email*</label>
                <input className="form-field-input" type="email" name="email" id="form-field-email-input" required/>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"300px", marginTop:"5px"}}>
                <input type="submit" value="Submit" style={{width:"100px", height:"50px", backgroundColor:"#008585", color:"white"}}/>
                </div>
                
            </form>
        )
    }
}