import { Route, Switch } from 'wouter'

import Index from '../pages'
import NotFound from '../pages/NotFound'

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
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
