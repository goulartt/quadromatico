import React from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';

import store from 'store';
import Sidebar from '../components/Sidebar';
import Topbar from 'components/Topbar';

const PrivateRoute = (props: RouteProps) => {
  const { component, ...rest } = props;
  const Component = component as any;

  return (
    <Route
      {...rest}
      render={routeProps =>
        store.getState().auth.isLogged ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: routeProps.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
