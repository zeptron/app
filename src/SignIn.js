import React from "react";
import { css } from "glamor";
import { Auth } from "aws-amplify";
import UserContext from "./UserContext";
import { IoLogoGoogle } from "react-icons/io";
import { Button } from "./containers/Auth.style";
import G from './assets/google.svg'
import O from './assets/or.svg'

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    showConfirmation: false,
    user: {},
    authCode: "",
  };
  static contextType = UserContext;
  onChange = (key, value) => {
    this.props.updateErrorMessage(null);
    this.setState({
      [key]: value,
    });
  };
  signIn = () => {
    const { history } = this.props;
    const { updateCurrentUser } = this.context;
    Auth.signIn(this.state.username, this.state.password)
      .then((user) => {
        if (!user.signInUserSession) {
          this.setState({ user, showConfirmation: true });
        } else {
          updateCurrentUser(user);
          history.push("/app/studio");
        }
      })
      .catch((err) => {
        console.log("error signing in...: ", err);
        this.props.updateErrorMessage(err.message);
      });
  };
  confirmSignIn = () => {
    const { history } = this.props;
    Auth.confirmSignIn(
      this.state.user,
      this.state.authCode,
      this.state.user.challengeName
    )
      .then((user) => {
        history.push("/");
      })
      .catch((err) => console.log("error confirming signing in...: ", err));
  };
  render() {
    return (
      <div {...css(styles.container)}>
        {!this.state.showConfirmation && (
          <div {...css(styles.formContainer)}>
            <Button
              fullwidth
              title={"Connect with Google"}
              className="google"
              icon={<img src={G}/>}
              iconPosition="left"
              iconStyle={{ color: "#4285f4", marginRight: 5 }}
              intlButtonId="continueGoogleBtn"
              onClick={thisGoogle}
              style={{ color: "rgb(0, 10, 18)" }}
            />
            <span style={{ textAlign: "center", paddingTop: 10 }}><img src={O}/></span>
            <br />
            <input
              onChange={(evt) => this.onChange("username", evt.target.value)}
              {...css(styles.input)}
              placeholder="EMAIL"
            />
            <input
              type="password"
              onChange={(evt) => this.onChange("password", evt.target.value)}
              {...css(styles.input)}
              placeholder="PASSWORD"
            />
            <Button
              fullwidth
              title={"Sign in"}
              onClick={this.signIn}
              className="register"
              style={{ color: "#fff" }}
            />
          </div>
        )}
        {this.state.showConfirmation && (
          <div {...css(styles.formContainer)}>
            <input
              onChange={(evt) => this.onChange("authCode", evt.target.value)}
              {...css(styles.input)}
              placeholder="Confirmation Code"
            />
            <Button
              fullwidth
              title={"Confirm sign in"}
              onClick={this.confirmSignIn.bind(this)}
              style={{ color: "#fff" }}
            />
          </div>
        )}
      </div>
    );
  }
}

const thisGoogle = () => {
  Auth.federatedSignIn({ provider: "Google" });
};

const styles = {
  signInHeader: {
    textAlign: "left",
    margin: "0px 0px 20px",
  },
  button: {
    padding: "10px 60px",
    backgroundColor: "#ffb102",
    marginTop: 10,
    marginBottom: 10,
    cursor: "pointer",
    borderRadius: "30px",
    ":hover": {
      backgroundColor: "#ffbb22",
    },
  },
  buttonText: {
    margin: 0,
    color: "white",
  },
  input: {
    height: 40,
    padding: 5,
    paddingLeft: 10,
    marginBottom: "10px",
    border: "none",
    outline: "none",
    fontSize: "16px",
    "::placeholder": {
      color: "rgba(0, 0, 0, .3)",
    },
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
    borderRadius: 20,
  },
};

export default SignIn;
