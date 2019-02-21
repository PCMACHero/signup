import React, {Component} from 'react'

export default class SignUp extends Component{
    state={
        allGood:false,
        submitted:false,
        signupemail:"",
        signuppassword:"",
        agrees: false,
        eInputM: <div style={{animation:"fadeIn 1s forwards"}}>Enter Your Email</div>,
        eValid: false,
        pInputM: <div style={{animation:"fadeIn 1s forwards"}}>Create Your Password (at least 6 characters)</div>,
        pValid: false,
    }
    validateEmail(email){
        console.log("val on change ran")
            const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(email)
          
    }
    validateEmailOnLose(email){
        console.log("val on lose ran")
            const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexp.test(email)) {
                this.setState({
                    eInputM:<div style={{color:"Red"}}>No Valid Email</div>,
                    eValid:false
                },()=> this.isAllGood())
            } else{
                this.setState({
                    eInputM:<div style={{color:"green"}}>Valid Email</div>,
                    eValid:true,
                },()=> this.isAllGood())

            }
          
    }

    validatePass(pass){
        if(pass.length>5){
            return true
        }else{
            return false
        }
    }
    isAllGood=(e,p,c)=>{
        if((this.state.eValid || e) && (this.state.pValid || p) && (this.state.agrees || c)){
            console.log("all good", this.state.eValid, e, this.state.pValid, p, this.state.agrees, c)
            this.setState({
                allGood:true
            })
        } else {
            this.setState({
                allGood: false
            })
        }
        setTimeout(() => {
            console.log("all good again", this.state.eValid, e, this.state.pValid, p, this.state.agrees, c)
        }, 2000);
    }
    handleChange=(e)=>{
        //only send to validate email when onBlur
        if(e.target.name==="signupemail"){
            
                this.setState({
                    [e.target.name]:e.target.value,
                    
                })
           
            
        }
        //validate pass here on each change
        if(e.target.name==="signuppassword"){
            if(this.validatePass(e.target.value)){
                
            
                this.setState({
                    [e.target.name]:e.target.value,
                    pInputM:<div style={{color:"green"}}>Password is Valid</div>,
                    pValid:true
                }, ()=>this.isAllGood())
            }else {
                this.setState({
                    [e.target.name]:e.target.value,
                    pInputM:<div style={{color:"red"}}>Password is Too Short</div>,
                    pValid:false
                }, ()=>this.isAllGood())
            }
        }
        
     
        
        if(e.target.name==="agrees"){
            
            if(e.target.checked){
                this.setState({
                    agrees: true
                },()=> this.isAllGood())
            }else {
                console.log("false ran")
                this.setState({
                    agrees: false
                }, ()=>this.isAllGood())
            }
            
            
            
            
        } 
        
        
    }
    render(){
        if(this.state.submitted){
            return (
                <div className="sign-up-container">
                <div className="sign-up-box">
                <div className="s-title">THANK YOU</div>
                <div className="s-greeting">We have sent you a confrimation email. Thank you for joining!</div>
                <input type="button" className="sign-up-btn" onClick={()=>{this.setState({
                    allGood:false,
                    submitted:false,
                    signupemail:"",
                    signuppassword:"",
                    agrees: false,
                    eInputM: <div style={{}}>Enter Your Email</div>,
                    eValid: false,
                    pInputM: <div style={{}}>Create Your Password (at least 6 characters)</div>,
                    pValid: false,})}} value="Return"/>
                
                </div>
                
                </div>
            ) 
        }else {
            return (
                <div className="sign-up-container">
                <div className="sign-up-box">
                <div className="s-title">{this.props.title}</div>
                <div className="s-greeting">{this.props.greeting}</div>
                <form className="input-box" onSubmit={(e)=>{
                        // e.preventDefault()
                        this.setState({
                            submitted:true,

                        })

                        
                    }} 
                        >
                <div className="input-message">{this.state.eInputM}</div>
    
                    <div className="input"><input key="inputemail" 
                        maxLength="35"
                        autoComplete="off"
                        type="email" name="signupemail" id="sign-up-email" 
                        onBlur={(e)=>this.validateEmailOnLose(e.target.value)} 
                        onFocus={(e)=>this.setState({eInputM: <div style={{}}>Enter Your Email</div>})}
                        onChange={(e)=>{
                            this.handleChange(e)
                        }} value={this.state.signupemail}/></div>
                        <div className="input-message">{this.state.pInputM}</div>
    
                    <div className="input"><input type="password" 
                    name="signuppassword" 
                    maxLength="20"
                    onChange={(e)=>{this.handleChange(e)}} 
                    onFocus={(e)=>{
                        this.setState({
                            [e.target.name]:"",
                            pInputM:<div style={{}}>Create Your Password (at least 6 characters)</div>,
                            pValid:false
                        }, ()=>this.isAllGood())
                    }}
                    value={this.state.signuppassword}
                    id="sign-up-password"/></div>
                    <div className="agree-box">
                        <div className="agree-text">{this.props.agreement}</div>
                        <input type="checkbox" onChange={(e)=>{this.handleChange(e)
                        console.log("jojo",e.target.checked)}} 
                        // checked={this.state.agrees} 
                        name="agrees" id="agrees"/> <div style={{fontSize:"10px", display:"inline-block"}}>I agree</div> 
                    </div>
                    <input type="submit" className="sign-up-btn" value="SignUp" disabled={this.state.allGood?"":"disabled"}/>
                    {/* <input type="button" className="sign-up-btn">Sign Up</input> */}
    
                </form>
                </div>
                
                </div>
            )
        }
        
    }
}