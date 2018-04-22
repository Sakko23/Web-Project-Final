import React, { Component } from 'react';
import './login.css'

//
class Login extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      logged: false
    }
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }


  signIn(username, password) {
      this.props.signIn(username, password);
  }
  signOut() {
    this.props.signOut();
  }
  render() {
    return (
      <div>
        <h1>Авторизация</h1>
        { 
            <LoginForm 
             onSignIn={this.signIn} 
            />
        }
      </div>
    )
  }  
}
export default Login;

class LoginForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      value: null,
      pass: null
    }
    this.handleSignIn = this.handleSignIn.bind(this);
  }
  handleSignIn(user, pass) {
    if(user!=null && pass!=null){
      let username = user;
      let password = pass;
      this.props.onSignIn(username, password);
    }
    else{
      console.log('entering error');
    }
  }
  handleChange=(e)=>{
    this.setState({value: e.target.value});

  }
  handlePass=(e)=>{
    this.setState({pass: e.target.value});

  }
  render() {
    return (
      <div>

        <input className="inp" type="text" placeholder="Enter login" user={this.state.value} onChange={this.handleChange} />
        <input className="inp" type="password" type="password" placeholder="Enter password" value={this.state.pass} onChange={this.handlePass}/>
        <button className="inp" id="btn" onClick={()=> this.handleSignIn(this.state.value, this.state.pass)}>Войти</button>

      </div>

    )
  }
}