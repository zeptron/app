import React from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
// Utils
import UserContext from "./UserContext";
import Header from "./Menu";
import Footer from "./Footer";
import Authenticator from "./Authenticator";
import ScrollToTop from './utils/scroll'
// Public Routes
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import App from './pages/App'
import * as Landing from './pages/Landing'
// App Routes
import Account from "./app/Account";
import Billing from "./app/Billing";
import Library from "./app/Library/Index";
import LibTemplate from "./app/Library/{template}";
import Studio from "./app/Studio/Index";
import Instance from "./app/Studio/Instance";
import Analytics from "./app/Studio/Instance/analytics";
import ConfigurationSteps from './app/Studio/ConfigurationSteps';
import Test from './app/Home.js'
import Shell from './app/Components/Shell'
import s from './styles/styles.module.css'
import Spacer from 'react-spacer'
import Logo from './assets/logo_white.svg'
import L from './assets/l.svg'
import R from './assets/r.svg'

class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: false,
  };
  static contextType = UserContext;
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.context.updateCurrentUser();
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;
    if (!isLoaded) return null;

    return (
      <Route
        {...rest}
        render={(props) => {
          return isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }}
      />
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

PrivateRoute = withRouter(PrivateRoute);
 export const DefaultRoutes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/terms" exact component={Terms} />        
        <Route path="/production" exact component={Landing.Production} />
        <Route path="/cctv" exact component={Landing.CCTV} />
        <Route path="/app" exact component={App} />
        <Route path="/test" component={Test}/>
        <Route component={NoMatch} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export const Login =(props) => {
  return (
    <Shell sidebar={ 
      <>
    <div style={{textAlign: 'left'}}>
    <Spacer height="20px"/>
    <Link to="/"><img src={Logo} style={{maxWidth: 150, paddingLeft: 25}}/></Link>
    <Spacer height="60px"/>
    <img src={L}/>
    </div>
    <Spacer height="50px"/>
    <h2 style={{color: 'white'}} className={`${s.header} ${s.center}`}>Welcome to Zeptron</h2>
    <Spacer height="100px"/>
    <div style={{textAlign: 'right'}}>
    <img src={R}/>
    </div>
    </>
    }>
        <Route path="/login" exact component={Authenticator} />
    </Shell>
  )
}

export const ProtectedLayout = (props) => {
  return (
<div>
   <Switch>
     {/* <Shell> */}
        <PrivateRoute path="/app/library/:id/" exact component={LibTemplate} />
        <PrivateRoute path="/app/library" exact component={Library} />
        <PrivateRoute path="/app/studio/configuration/:id" component={ConfigurationSteps} />
        <PrivateRoute path="/app/studio/:id/analytics" component={Analytics} />
        <PrivateRoute path="/app/studio/:id/" component={Instance} />
        <PrivateRoute path="/app/studio" exact component={Studio} />
        <PrivateRoute path="/app/account" component={Account} />
        <PrivateRoute path="/app/billing" component={Billing} />
      {/* </Shell> */}
    </Switch> 
</div>
  )
}

const Routes = () => (
  <Router>
    <div>
    <Header />
    <Switch>
      <Route path='/app' component={ProtectedLayout}/>
      <Route path='/login' component={Login}/>
      <Route path='/' component={DefaultRoutes}/>
      <PrivateRoute path="/app/home" component={Test} />
      <PrivateRoute path="/app/studio" exact component={Studio} />
    </Switch>
    </div>
  </Router>
);

export default Routes;

