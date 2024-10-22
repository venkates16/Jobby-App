import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/HomeRoute/Home'
import Login from './components/Login/Login'
import JobsContainerRoute from './components/JobsContainerRoute'
import JobsDetailesRoute from './components/JobsDetailesRoute'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/Login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={JobsContainerRoute} />
    <ProtectedRoute exact path="/jobs/:id" component={JobsDetailesRoute} />
    <Route exact path="/NotFound" component={NotFound} />

    <Redirect to="/NotFound" />
  </Switch>
)

export default App
