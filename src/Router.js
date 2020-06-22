import React from 'react'
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import UserContext from './UserContext'
import Header from './Header'
import Library from './components/App/Library'
import Authenticator from './Authenticator'
import Home from './Home'
import Private from './Private.js'
import Profile from './Profile'
import About from './About'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'
import Currency from './components/Models/Currency'
import OpenPose from './components/Models/OpenPose'
import OpenPoseLib from './components/Demo/Posenet'
import Coco from './components/Models/Coco'
import Ripeness from './components/Models/Ripeness'


class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: false
  }
  static contextType = UserContext
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.context.updateCurrentUser()
    })
  }
  componentWillUnmount() {
    this.unlisten()
  }
  render() {
    const { component: Component, ...rest } = this.props
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    const isLoaded = this.context.isLoaded
    if (!isLoaded) return null

    return (
      <Route
        {...rest}
        render={props => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth",
              }}
            />
          )
        }}
      />
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

PrivateRoute = withRouter(PrivateRoute)

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/auth' exact component={Authenticator} />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/privacy' exact component={Privacy} />
        <Route path='/terms' exact component={Terms} />
        <PrivateRoute path='/private' exact component={Private} />
        <PrivateRoute path='/library' exact component={Library} />
        <PrivateRoute path='/library/currency' exact component={Currency} />
        <PrivateRoute path='/library/openpose' exact component={OpenPose} />
        <PrivateRoute path='/model/openpose' exact component={OpenPoseLib} />
        <PrivateRoute path='/library/coco' exact component={Coco} />
        <PrivateRoute path='/library/ripeness' exact component={Ripeness} />
        <PrivateRoute path='/profile'  component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default Routes
