import React from "react";
import { css } from "glamor";
import { Button } from "./containers/Auth.style";
import { IoLogoGoogle } from "react-icons/io";
import { Auth } from "aws-amplify";

class SignUp extends React.Component {
  state = {
    password: "",
    email: "",
    // phone_number: '',
    authCode: "",
    showConfirmation: false,
  };
  onChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  signUp = () => {
    const { password, given_name, family_name, email } = this.state;
    Auth.signUp({
      username: email,
      password,
      attributes: {
        given_name,
        family_name,
        email,
        // 'custom:favorite_flavor': 'Cookie Dough'  // custom attribute, not standard
      },
    })
      .then(() => this.setState({ showConfirmation: true }))
      .catch((err) => {
        console.log("error signing up: ", err);
        this.props.updateErrorMessage(err.message);
      });
  };
  confirmSignUp = () => {
    Auth.confirmSignUp(this.state.email, this.state.authCode)
      .then(() => this.props.switchState("showSignIn"))
      .catch((err) => console.log("error confirming signing up: ", err));
  };
  render() {
    const { showConfirmation } = this.state;
    return (
      <div {...css(styles.container)}>
        {!showConfirmation && (
          <div {...css(styles.formContainer)}>
            {/* <Button
          fullwidth
          title={'Sign up with Facebook'}
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
              title={"Sign up with Google"}
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
              {...css(styles.input)}
              placeholder="First name"
              onChange={(evt) => this.onChange("given_name", evt.target.value)}
            />
            <input
              {...css(styles.input)}
              placeholder="Family name"
              onChange={(evt) => this.onChange("family_name", evt.target.value)}
            />
            <input
              {...css(styles.input)}
              placeholder="Email"
              onChange={(evt) => this.onChange("email", evt.target.value)}
            />
            <input
              {...css(styles.input)}
              placeholder="Password"
              type="password"
              onChange={(evt) => this.onChange("password", evt.target.value)}
            />

            <Button
              fullwidth
              title={"Sign up"}
              onClick={this.signUp}
              style={{ color: "#fff" }}
            />
          </div>
        )}
        {showConfirmation && (
          <div {...css(styles.formContainer)}>
            <input
              onChange={(evt) => this.onChange("authCode", evt.target.value)}
              {...css(styles.input)}
              placeholder="Confirmation Code"
            />
            <div {...css(styles.button)} onClick={this.confirmSignUp}>
              <p {...css(styles.buttonText)}>Confirm Sign Up</p>
            </div>
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
  signUpHeader: {
    textAlign: "left",
    margin: "0px 0px 20px",
  },
  button: {
    padding: "10px 60px",
    backgroundColor: "#ffb102",
    cursor: "pointer",
    borderRadius: "30px",
    marginTop: 10,
    marginBottom: 10,
    ":hover": {
      backgroundColor: "#ffbb22",
    },
  },
  buttonText: {
    margin: 0,
    color: "white",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "15px",
  },
  formContainer: {
    padding: 20,
    width: 400,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 0px 2px rgba(0, 0, 0, .2)",
    borderRadius: 20,
  },
  input: {
    height: 40,
    padding: 5,
    marginBottom: "10px",
    border: "none",
    outline: "none",
    borderBottom: "2px solid #ffb102",
    fontSize: "16px",
    "::placeholder": {
      color: "rgba(0, 0, 0, .3)",
    },
  },
};

export default SignUp;
