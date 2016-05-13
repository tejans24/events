import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

//material ui theme imports
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from '../layouts/nav-bar.jsx';

// App component - represents the whole app
class App extends Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

//material-ui context for getting the theme
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default App;
