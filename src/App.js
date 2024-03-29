import React, { Component } from "react";
import { Auth, Hub } from "aws-amplify";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Router from "./Router";
import UserContext from "./UserContext";
import theme from "./styles/theme.js";
import TagManager from 'react-gtm-module'
// import { loadStripe } from '@stripe/stripe-js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogRocket from 'logrocket';
LogRocket.init('mfa6i0/zeptron');

const tagManagerArgs = {
  gtmId: 'GTM-MCJN3C6'
}

TagManager.initialize(tagManagerArgs)
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

class App extends Component {
  state = {
    currentUser: {},
    isLoaded: false,
  };
  componentDidMount() {
    this.updateCurrentUser();
    Hub.listen("auth", this);
  }
  onHubCapsule(capsule) {
    const { channel, payload } = capsule;
    if (channel === "auth" && payload.event !== "signIn") {
      this.updateCurrentUser();
    }
  }
  updateCurrentUser = async (user) => {
    if (user) {
      this.setState({ currentUser: user });
      return;
    }
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ currentUser: user, isLoaded: true });
    } catch (err) {
      this.setState({ currentUser: null, isLoaded: true });
    }
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.currentUser,
          updateCurrentUser: this.updateCurrentUser,
          isLoaded: this.state.isLoaded,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">

            <Router />
          </div>
        </ThemeProvider>
      </UserContext.Provider>
    );
  }
}

export default App;
