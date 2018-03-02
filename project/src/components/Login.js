import React, { Component } from 'react';
import '../styles/Login.css';
import App from '../App';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            signed: false,
        }
    }

    handleEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e)=>{
        this.setState({password: e.target.value});
    }

    Sign=()=>{
        this.setState({signed:true});
    }

    render(){
        if(this.state.signed == false){
        return(
                <div class="login-page">
                    <div class="form">
                        <form class="login-form" onSubmit={this.Sign}>
                        <input type="text" placeholder="username" onChange={this.handleEmailChange} required/>
                        <input type="password" placeholder="password" onChange={this.handlePasswordChange} required/>
                        <button type="submit">login</button>
                        <p class="message">Not registered? <a href="#">Create an account</a></p>
                        </form>
                    </div>
                </div>
        );
    }
    else{
        return(
            <App email={this.state.email} password={this.state.password}/>
        );
    }
    }
}
export default Login;