import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

/* NavBar
 *
 * This component represents the navigation bar for the application. It is built
 * using material-ui AppBar.
 *
 * It includes Log in and Sign up buttons.
 */
var NavBar = React.createClass({

  /* handleTouchTap()
   *
   * Directs to the base url
   */
  handleTouchTap() {
    browserHistory.push('/');
  },
  render() {
    var navBarContent = "";

    return (
      <AppBar
        title="Events"
        titleStyle={{ cursor: 'pointer' }}
        onTitleTouchTap={ this.handleTouchTap }
      >
        <Link to="/login" className="w-button button login-button"  style={{textDecoration: 'none', color: 'white'}}>
          {"Log in"}
]        </Link>
        <div className="button-container" style={{marginTop: 10}}>
          {navBarContent}
        </div>
      </AppBar>
    );
  }
});


export default NavBar;
