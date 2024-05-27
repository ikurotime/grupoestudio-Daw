import { Route, Switch } from 'wouter'

import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import Index from '../pages'
import Messages from '@/pages/Messages'
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
      <Route path='/contacto' component={Contact} />
      <Route path='/messages' component={Messages} />
      <Route path='/search/profile/:id' component={Profile} />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
