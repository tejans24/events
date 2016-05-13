import React, { Component, PropTypes } from 'react';

import { Link, browserHistory } from 'react-router'

//material-ui components
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

var Signup = React.createClass({
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
  validateFields(email, password, confirmPassword) {

  },
  displayError(message){
    this.setState({message: message, messageClass: 'alert alert-danger registerError'});
  },
  handleSubmit(e) {
    e.preventDefault();
    this.setState({message:'', messageClass:'hidden'});
    var that = this;

    //getting form values
    var email = this.refs.email.getValue().trim();
    var password = this.refs.password.getValue().trim();
    var firstname = this.refs.firstname.getValue().trim();
    var lastname = this.refs.lastname.getValue().trim();

    //validateFields(email, password, confirmPassword);

    console.log(email);
    console.log(password);
    console.log(firstname);
    console.log(lastname);

    //account creation using Meteor
    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        fullname: (firstname + ' ' + lastname).toLowerCase(),
        firstname: firstname,
        lastname: lastname,
        avatar: 'http://placehold.it/150x150'
      }
    }, function(error) {
      if(error) {
        console.log(error);
        that.displayError(error.reason);
      } else {
        browserHistory.push('/');
      }
    });
  },
  render() {
    return(
      <div className="section--signup row center-xs">
        <div className="col-xs-6">
          <div className="login-errors">
            {this.state.message}
          </div>
          <form onSubmit={this.handleSubmit} id="signin" className="signup__fields box" role="form">
            <h2 className="signup-title">Sign up</h2>
            <TextField
              ref="firstname"
              hintText="First Name"
              className="signup-firstname"
            />
            <TextField
              ref="lastname"
              hintText="Last Name"
              className="signup-lastname"
            />
            <TextField
              ref="email"
              hintText="Email"
              type="email"
              className="signup-email"
            />
            <br></br>
            <TextField
              ref="password"
              hintText="Password"
              type="password"
              className="signup-password"
            />
            <div className="signup__submit">
              <RaisedButton label="Sign up" type="submit" secondary={true} className="signup-submit"/>
            </div>
          </form>
          <Link to="/login" className="w-button button signup-already-signedup">
            {'Already Signed up?'}
          </Link>
        </div>
      </div>
    )
  }
});

export default Signup;
