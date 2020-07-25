import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Countries from '../components/pages/Countries/Countries';


export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Countries />
      </Route>
    </Switch>
  )
};