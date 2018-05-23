import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Mccomb from './Mccomb'
import Portfolio from './Portfolio'
import NoMatch from './NoMatch'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Mccomb} />
      <Route exact path='/Portfolio' component={Portfolio} />
      <Route component={NoMatch} />
    </Switch>
  </main>
)

export default Main