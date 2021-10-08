import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}
