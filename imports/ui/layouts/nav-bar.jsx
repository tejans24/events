import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

import { Link } from 'react-router'


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
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
});

export default NavBar;
