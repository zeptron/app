import React from "react";
import { css } from "glamor";
import { Box, Grid } from "@material-ui/core";
import s from "./styles/styles.module.css";
import Spacer from "react-spacer";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box style={{borderTop: '1px solid #494848'}} bgcolor='primary.main' color="primary.contrastText"  p={4}>
      <Spacer height="40px" />
      <Grid container alignItems="center" justify="center">
        <Grid item md={8}>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={12}>
            <Link to="/" {...css(styles.link)}>
          <img
            alt="icon"
            style={styles.amplifyLogo}
            src={require("./assets/logo_white.svg")}
          />
        </Link>
            </Grid>
            <Grid item xs={12}>
              <Spacer height="40px" />
              <div {...css(styles.navContainer)}>
                {/* <Link to="/about" {...css(styles.link)}>
                  <p className={s.navItemF}>About</p>
                </Link> */}
                <Link to="/contact" {...css(styles.link)}>
                  <p className={s.navItemF}>Contact</p>
                </Link>
                <Link to="/privacy" {...css(styles.link)}>
                  <p className={s.navItemF}>Privacy</p>
                </Link>
                <Link to="/terms" {...css(styles.link)}>
                  <p className={s.navItemF}>Terms</p>
                </Link>
              </div>
              <Spacer height="40px" />
            </Grid>

            <Grid item xs={12}>
            © 2020, Zeptron
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Spacer height="40px" />
    </Box>
  );
}

const styles = {
  amplifyLogo: {
    height: 30,
    marginLeft: 25,
    marginBottom: 5,
  },
  navContainer: {
    display: "inline-flex",
    flex: 1,
    marginTop: 6,
    fontSize: "12px",
  },

  link: {
    textDecoration: "none",
    display: "inline-flex",
  },

  container: {
    height: "80px",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "#000a12",
    display: "flex",
  },
};
