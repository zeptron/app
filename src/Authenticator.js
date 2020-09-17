import React from "react";
import { css } from "glamor";
import {Box, Grid, Button} from '@material-ui/core'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import Spacer from 'react-spacer'
import s from './styles/styles.module.css'
import SEO from './utils/SEO'
import Shell from './app/Components/Shell'

class Authenticator extends React.Component {
  state = {
    errorMessage: null,
    currentState: "showSignIn",
  };
  switchState = (currentState) => {
    this.setState({
      currentState,
    });
  };
  updateErrorMessage = (errorMessage) => {
    this.setState({ errorMessage });
  };
  render() {
    const { currentState } = this.state;
    return (
      <div>
        
          <Grid container alignItems="center" justify="center">
            <Grid item xs={12}>
            <SEO 
              title="Zeptron - Sign in"
              path="login"
              />
              <Spacer height="100px"/>
                    <h3 style={{textAlign: 'center'}} className={s.header} >
                    {currentState === "showSignIn" && (
                      'Sign In'
                      )}
                      {currentState === "showSignUp" && (
                          'Register'
                          )}
                            {currentState === "showForgotPassword" && (
                              'Reset password'
                              )}
                </h3>
       
          <div style={styles.container}>
        {currentState === "showSignIn" && (
          <SignIn
            {...this.props}
            updateErrorMessage={this.updateErrorMessage}
          />
        )}
        {currentState === "showSignUp" && (
          <SignUp
            {...this.props}
            updateErrorMessage={this.updateErrorMessage}
            switchState={this.switchState}
          />
        )}
        {currentState === "showForgotPassword" && (
          <ForgotPassword
            switchState={this.switchState}
            {...this.props}
            updateErrorMessage={this.updateErrorMessage}
          />
        )}
        <div {...css(styles.buttonContainer)}>
          {currentState === "showSignIn" ? (
            <div {...css(styles.linkContainer)}>
             <Button variant="text" color="secondary" size="medium" onClick={() => this.switchState("showSignUp")}>
               <strong>Sign up</strong>
             </Button>
             <Button variant="text" color="secondary" size="medium" onClick={() => this.switchState("showForgotPassword")}>
               <strong>Reset Password</strong>
             </Button>
            
            </div>
          ) : (
            <div {...css(styles.linkContainer)}>
               <Button variant="text" color="primary" size="medium" onClick={() => this.switchState("showSignIn")}>
               <strong>Sign in</strong>
             </Button>
            </div>
          )}
        </div>
        {this.state.errorMessage && (
          <div>
            <p>{this.state.errorMessage}</p>
          </div>
        )}
      </div>
    
      </Grid>
          </Grid>
     
      </div>
    );
  }
}

export default Authenticator;

const styles = {
  linkContainer: {
    marginTop: 30,
  },
  // container: {
  //   marginTop: 50,
  // },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  toggle: {
    paddingBottom: "10px",
    cursor: "pointer",
    marginTop: 10,
    marginBottom: 0,
    // marginBottom: 0,
    borderBottom: "2px solid transparent",
    ":hover": {
      opacity: 0.6,
    },
  },
};
