import React from 'react'
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import UserContext from './UserContext'
import Header from './Menu'
import Footer from './Footer'
import Library from './app/Library/Index'
import Authenticator from './Authenticator'
import Home from './pages/Home/Index'
import Profile from './app/Account'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Currency from './app/Library/Currency'
import OpenPose from './app/Library/OpenPose'
import OpenPoseLib from './app/Model/Browser/OpenPoseLib'
import Coco from './app/Library/Coco'
import Ripeness from './app/Library/Ripeness'
import CurrencyProvision from './app/Model/Currency/Provision'
import CurrencyConfigure from './app/Model/Currency/Configure'
import CurrencyStream from './app/Model/Currency/Stream'
import DeepFace from './app/Library/DeepFace'
import OpenALPR from './app/Library/OpenALPR'
import CurrencyLib from './app/Model/Currency/Index'
import Studio from './app/Studio/Index'
import Streams from './app/Streams'
import Billing from './app/Billing'
import Provision from './app/Studio/Provision'


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
        <PrivateRoute path='/library' exact component={Library} />
        <PrivateRoute path='/studio' exact component={Studio} />
        <PrivateRoute path='/streams' exact component={Streams} />
        <PrivateRoute path='/library/currency' exact component={Currency} />
        <PrivateRoute path='/model/currency/provision' exact component={CurrencyProvision} />
        <PrivateRoute path='/model/currency/configure' exact component={CurrencyConfigure} />
        <PrivateRoute path='/model/currency/stream' exact component={CurrencyStream} />
        <PrivateRoute path='/model/currency' exact component={CurrencyLib} />
        <PrivateRoute path='/library/openpose' exact component={OpenPose} />
        <PrivateRoute path='/model/openpose' exact component={OpenPoseLib} />
        <PrivateRoute path='/library/deepface' exact component={DeepFace} />
        <PrivateRoute path='/library/openalpr' exact component={OpenALPR} />
        <PrivateRoute path='/library/coco' exact component={Coco} />
        <PrivateRoute path='/library/ripeness' exact component={Ripeness} />
        <PrivateRoute path='/studio/provision/' component={Provision} />
        <PrivateRoute path='/account'  component={Profile} />
        <PrivateRoute path='/billing'   component={Billing} />
        <Route component={NoMatch} />
      </Switch>
      <Footer/>
    </div>
  </Router>
)

export default Routes
