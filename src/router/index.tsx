import { Route, Switch } from 'wouter'

import Index from '../pages'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export default function Router() {
  return (
    <Switch>
      <Route path='/' component={Index} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
      <Route path='/search' component={Search} />
      <Route path='/search/profile/:id' component={Profile} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
