import React from "react";
import { css } from "glamor";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import s from "./styles/styles.module.css";
import AppBar from "./components/Nav/AppBar";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  static contextType = UserContext;

  render() {
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;

    return (
      <div {...css(styles.container)}>
        <Link to="/" {...css(styles.link)}>
          <img
            alt="icon"
            style={styles.amplifyLogo}
            src={require("./assets/deep_icon_alt.png")}
          />
          <h2 className={s.title}>Zeptron</h2>
        </Link>

        <div {...css(styles.navContainer)}>
          {isLoaded ? (
            isAuthenticated ? (
              <div>
                <AppBar />
              </div>
            ) : (
              <div>
                <Button
                  href="/about"
                  variant="outlined"
                  style={{ color: "white" }}
                >
                  About
                </Button>
                <Button
                  href="/auth"
                  variant="outlined"
                  style={{ color: "white", marginRight: "15px" }}
                >
                  Sign In
                </Button>
              </div>
            )
          ) : null}
        </div>
      </div>
    );
  }
}

const styles = {
  amplifyLogo: {
    height: 30,
    marginLeft: 45,
  },

  navContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    flex: 1,
    paddingLeft: 50,
    marginTop: 6,
  },
  link: {
    textDecoration: "none",
    display: "inline-flex",
  },

  container: {
    height: "80px",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000a12",
    display: "flex",
  },
};

export default Header;
