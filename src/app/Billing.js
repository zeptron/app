import React from "react";
import { Auth } from "aws-amplify";
import UserContext from "../UserContext";
import s from "../styles/styles.module.css";
import { Grid, Box, Button } from "@material-ui/core";
import Spacer from "react-spacer";
import styled from "styled-components";

const Price = styled.p`
  color: #ffb04c;
  text-align: center;
  font-size: 6em;
  margin: 0;
`;

class Billing extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
          <Spacer height="10px" />
          <Grid container alignItems="center" justify="center">
            <Grid item md={8} xs={12}>
              <h1 className={s.header} style={{ textAlign: "center" }}>
                Billing
              </h1>
            </Grid>
          </Grid>
          <Spacer height="50px" />
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/account"
          >
            <span className={s.ctabutton}>Go To Account</span>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={signOut}
          >
            <span className={s.ctabutton}>Sign Out</span>
          </Button>
          <Spacer height="50px" />
        </Box>
        <Box bgcolor="primary.light" color="primary.contrastText">
          <Spacer height="50px" />
          <Grid container alignItems="center" justify="center">
            <Grid item md={8} xs={12}>
              <h3 style={{ color: "white" }} className={s.subclass}>
                Oustanding balance
              </h3>
              <Price>$0</Price>
              <Spacer height="20px" />
              <Button
                variant="contained"
                color="tertiary"
                size="large"
                disabled={true}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
          <Spacer height="50px" />
        </Box>
        <Box>
          <Spacer height="50px" />
          <h3 className={s.subclass}>Payments</h3>
          <Spacer height="50px" />
        </Box>
        <Grid container alignItems="center" justify="center">
          <Grid item md={8} xs={12}>
            <hr />
          </Grid>
        </Grid>

        <Box>
          <Spacer height="50px" />
          <h3 className={s.subclass}>Payment Methods</h3>
          <Spacer height="50px" />
        </Box>
      </div>
    );
  }
}

function signOut() {
  Auth.signOut()
    .then(() => {
      this.props.history.push("/auth");
    })
    .catch(() => console.log("error signing out..."));
}

export default Billing;
