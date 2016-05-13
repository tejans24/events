//react imports
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { Meteor } from 'meteor/meteor';

//material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

var Login = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },
  getInitialState() {
    return {
        message:''
    }
  },
  displayError(message){
    this.setState({message: message,messageClass:'alert alert-danger message'});
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({message:'', messageClass:'hidden'});
    var that = this;
    var email = this.refs.email.getValue().trim();
    var password = this.refs.password.getValue().trim();
    //var rememberMe = this.refs.rememberMe.getValue().trim();

    //login with email and password
    Meteor.loginWithPassword(email, password, function (e) {
      if(e){
        console.log(e);
        that.displayError(e.reason)
      } else{
        Meteor.setTimeout(function(){
          browserHistory.push('/');
        },1000)
      }
    });
  },
  render(){
    return(
      <div className="section--login row center-xs">
        <div className="col-xs-6">
          <div className="login-errors">
            {this.state.message}
          </div>
          <form onSubmit={this.handleSubmit} id="signin" className="login__fields box" role="form">
            <h2 className="login-title">Log in</h2>
            <TextField
              ref="email"
              hintText="Email"
              className="login-email"
            />
            <br></br>
            <TextField
              ref="password"
              hintText="Password"
              type="password"
              className="login-password"
            />
            <Checkbox
              ref="rememberMe"
              label="Remember me"
              style={{marginBottom: 16}}
              className="login-remember-me box"
            />
            <div className="login__submit">
              <RaisedButton label="Log in" type="submit" secondary={true} className="login-submit"/>
            </div>
          </form>
          <a href="" className="login-forgot-password">Forgot password</a>
        </div>
      </div>
    );
  }
});

Login.propTypes = {
};

export default Login;
