import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

import EventPluginHub from 'react/lib/EventPluginHub';
import TapEventPlugin from 'react/lib/TapEventPlugin';

EventPluginHub.injection.injectEventPluginsByName({ TapEventPlugin });

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});
