(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),l=a.n(i),o=(a(15),a(2)),r=a(3),c=a(5),u=a(4),d=a(6),m=(a(16),a(17),a(1)),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={allGood:!1,submitted:!1,signupemail:"",signuppassword:"",agrees:!1,eInputM:s.a.createElement("div",{style:{animation:"fadeIn 1s forwards"}},"Enter Your Email"),eValid:!1,pInputM:s.a.createElement("div",{style:{animation:"fadeIn 1s forwards"}},"Create Your Password (at least 6 characters)"),pValid:!1},a.isAllGood=function(e,t,n){(a.state.eValid||e)&&(a.state.pValid||t)&&(a.state.agrees||n)?(console.log("all good",a.state.eValid,e,a.state.pValid,t,a.state.agrees,n),a.setState({allGood:!0})):a.setState({allGood:!1}),setTimeout(function(){console.log("all good again",a.state.eValid,e,a.state.pValid,t,a.state.agrees,n)},2e3)},a.handleChange=function(e){var t,n;("signupemail"===e.target.name&&a.setState(Object(m.a)({},e.target.name,e.target.value)),"signuppassword"===e.target.name)&&(a.validatePass(e.target.value)?a.setState((t={},Object(m.a)(t,e.target.name,e.target.value),Object(m.a)(t,"pInputM",s.a.createElement("div",{style:{color:"green"}},"Password is Valid")),Object(m.a)(t,"pValid",!0),t),function(){return a.isAllGood()}):a.setState((n={},Object(m.a)(n,e.target.name,e.target.value),Object(m.a)(n,"pInputM",s.a.createElement("div",{style:{color:"red"}},"Password is Too Short")),Object(m.a)(n,"pValid",!1),n),function(){return a.isAllGood()}));"agrees"===e.target.name&&(e.target.checked?a.setState({agrees:!0},function(){return a.isAllGood()}):(console.log("false ran"),a.setState({agrees:!1},function(){return a.isAllGood()})))},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"validateEmail",value:function(e){console.log("val on change ran");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}},{key:"validateEmailOnLose",value:function(e){var t=this;console.log("val on lose ran");/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?this.setState({eInputM:s.a.createElement("div",{style:{color:"green"}},"Valid Email"),eValid:!0},function(){return t.isAllGood()}):this.setState({eInputM:s.a.createElement("div",{style:{color:"Red"}},"No Valid Email"),eValid:!1},function(){return t.isAllGood()})}},{key:"validatePass",value:function(e){return e.length>5}},{key:"render",value:function(){var e=this;return this.state.submitted?s.a.createElement("div",{className:"sign-up-container"},s.a.createElement("div",{className:"sign-up-box"},s.a.createElement("div",{className:"s-title"},"THANK YOU"),s.a.createElement("div",{className:"s-greeting"},"We have sent you a confrimation email. Thank you for joining!"),s.a.createElement("input",{type:"button",className:"sign-up-btn",onClick:function(){e.setState({allGood:!1,submitted:!1,signupemail:"",signuppassword:"",agrees:!1,eInputM:s.a.createElement("div",{style:{}},"Enter Your Email"),eValid:!1,pInputM:s.a.createElement("div",{style:{}},"Create Your Password (at least 6 characters)"),pValid:!1})},value:"Return"}))):s.a.createElement("div",{className:"sign-up-container"},s.a.createElement("div",{className:"sign-up-box"},s.a.createElement("div",{className:"s-title"},this.props.title),s.a.createElement("div",{className:"s-greeting"},this.props.greeting),s.a.createElement("form",{className:"input-box",onSubmit:function(t){e.setState({submitted:!0})}},s.a.createElement("div",{className:"input-message"},this.state.eInputM),s.a.createElement("div",{className:"input"},s.a.createElement("input",{key:"inputemail",maxLength:"35",autoComplete:"off",type:"email",name:"signupemail",id:"sign-up-email",onBlur:function(t){return e.validateEmailOnLose(t.target.value)},onFocus:function(t){return e.setState({eInputM:s.a.createElement("div",{style:{}},"Enter Your Email")})},onChange:function(t){e.handleChange(t)},value:this.state.signupemail})),s.a.createElement("div",{className:"input-message"},this.state.pInputM),s.a.createElement("div",{className:"input"},s.a.createElement("input",{type:"password",name:"signuppassword",maxLength:"20",onChange:function(t){e.handleChange(t)},onFocus:function(t){var a;e.setState((a={},Object(m.a)(a,t.target.name,""),Object(m.a)(a,"pInputM",s.a.createElement("div",{style:{}},"Create Your Password (at least 6 characters)")),Object(m.a)(a,"pValid",!1),a),function(){return e.isAllGood()})},value:this.state.signuppassword,id:"sign-up-password"})),s.a.createElement("div",{className:"agree-box"},s.a.createElement("div",{className:"agree-text"},this.props.agreement),s.a.createElement("input",{type:"checkbox",onChange:function(t){e.handleChange(t),console.log("jojo",t.target.checked)},name:"agrees",id:"agrees"})," ",s.a.createElement("div",{style:{fontSize:"10px",display:"inline-block"}},"I agree")),s.a.createElement("input",{type:"submit",className:"sign-up-btn",value:"SignUp",disabled:this.state.allGood?"":"disabled"}))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,{title:"SIGNUP",greeting:"Welcome to this thing! Your one-stop shop for all your blah blah blah. Blah blah, anytime.",agreement:"*You agree to let XYZ do such and such, and power of attorney, TOS, yada yada"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d5a3fa64.chunk.js.map