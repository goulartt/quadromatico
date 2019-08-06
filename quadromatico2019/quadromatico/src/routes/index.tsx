import React, { Fragment } from 'react';

import { Switch, Router } from 'react-router-dom';

import history from './history';

import { ROUTE_ELEMENTS } from './routeConfig';

import Guest from './guest';
import SignIn from 'pages/SignIn';
import Topbar from 'components/Topbar';
import { themeOrangeUnifil } from 'styles/themes';
import { ThemeProvider } from '@material-ui/styles';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Guest exact path="/signin" component={SignIn} />
      <Fragment>
        <ThemeProvider theme={themeOrangeUnifil}>
          <Topbar />
        </ThemeProvider>
        {ROUTE_ELEMENTS}
      </Fragment>
    </Switch>
  </Router>
);

export default Routes;
