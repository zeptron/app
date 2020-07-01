import React from "react";
import { css } from "glamor";
import { Auth } from "aws-amplify";
import UserContext from "./UserContext";
import { IoLogoGoogle } from "react-icons/io";
import { Button } from "./containers/Auth.style";

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
          history.push("/account");
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
            <h2 {...css(styles.signInHeader)}>Sign In</h2>
            {/* <Button
          fullwidth
          title={'Sign in with Facebook'}
          className='facebook'
          icon={<IoLogoFacebook />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueFacebookBtn'
          onClick={thisFacebook}
          style={{ color: '#fff' }}
        /> */}
            <Button
              fullwidth
              title={"Sign in with Google"}
              className="google"
              icon={<IoLogoGoogle />}
              iconPosition="left"
              iconStyle={{ color: "#ffffff", marginRight: 5 }}
              intlButtonId="continueGoogleBtn"
              onClick={thisGoogle}
              style={{ color: "#fff" }}
            />
            <span style={{ textAlign: "center" }}>or</span>
            <br />
            <input
              onChange={(evt) => this.onChange("username", evt.target.value)}
              {...css(styles.input)}
              placeholder="username"
            />
            <input
              type="password"
              onChange={(evt) => this.onChange("password", evt.target.value)}
              {...css(styles.input)}
              placeholder="password"
            />
            <Button
              fullwidth
              title={"Sign in"}
              onClick={this.signIn}
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
// const thisFacebook = () => {
//   Auth.federatedSignIn({ provider: "Facebook" });
// };

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
    marginBottom: "10px",
    border: "none",
    outline: "none",
    borderBottom: "2px solid #ffb102",
    fontSize: "16px",
    "::placeholder": {
      color: "rgba(0, 0, 0, .3)",
    },
  },
  container: {
    flex: 1,
    paddingTop: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formContainer: {
    padding: 20,
    width: 400,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
    borderRadius: 20,
  },
};

export default SignIn;
