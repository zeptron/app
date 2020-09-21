import React from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
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
                pathname: "/auth",
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

const Routes = () => (
  <Router>
    <div>
      <Header />
      <ScrollToTop>
      <Switch>
        <Route path="/login" exact component={Authenticator} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/terms" exact component={Terms} />        
        <Route path="/production" exact component={Landing.Production} />
        <Route path="/cctv" exact component={Landing.CCTV} />
        <Route path="/app" exact component={App} />
        <PrivateRoute path="/library/:id/" exact component={LibTemplate} />
        <PrivateRoute path="/library" exact component={Library} />
        <PrivateRoute path="/studio/configuration/:id" component={ConfigurationSteps} />
        <PrivateRoute path="/studio/:id/analytics" component={Analytics} />
        <PrivateRoute path="/studio/:id/" component={Instance} />
        <PrivateRoute path="/studio" exact component={Studio} />
        <PrivateRoute path="/account" component={Account} />
        <PrivateRoute path="/billing" component={Billing} />
        <Route component={NoMatch} />
      </Switch>
      </ScrollToTop>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default Routes;