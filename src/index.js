import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';

import reportWebVitals from './reportWebVitals';
import RouteProvider from './route-provider';

import './index.css';

const App = () => (
  <RouteProvider>
    {({ routes }) => (
      <Switch>
        {routes.map(route => (
          <Route
            exact
            key={`route_${route.id}`}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    )}
  </RouteProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
