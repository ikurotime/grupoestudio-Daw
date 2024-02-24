import { Route, Switch } from 'wouter'

import Index from '../pages'

export default function Router() {
  return (
    <Switch>
      <Route path='/' component={Index} />
      <Route path='/dashboard' />
      <Route path='/signup' />
      <Route path='/signin' />
      <Route path='/dashboard' />
      <Route path='/search' />
      <Route path='/search/profile/:id' />
      <Route>404: No such page!</Route>
    </Switch>
  )
}
