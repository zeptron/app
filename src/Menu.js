import React from "react";
import { css } from "glamor";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import AppBar from "./components/Nav/AppBar2";


class Header extends React.Component {
  state = {
    isScrolled : false
  };
  static contextType = UserContext;

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  listenScrollEvent = e => {
    if (window.scrollY > 1) {
      this.setState({isScrolled: true})
    } else {
      this.setState({isScrolled: false})
    }
  }

  checkbackground = () => {
    if(this.state.isScrolled){
      return {backgroundColor: '#000a12'}
    } 
    else {
      return {backgroundColor: 'rgba(0, 10, 18, 0)'}
    }
  }


  render() {
    const isAuthenticated =
      this.context.user && this.context.user.username ? true : false;
    const isLoaded = this.context.isLoaded;

    return (
      <div {...css(styles.container, this.checkbackground())}>
        <Link to="/" {...css(styles.link)}>
          <img
            alt="icon"
            style={styles.amplifyLogo}
            src={require("./assets/logo_white.svg")}
          />
        </Link>

        <div {...css(styles.navContainer)}>
          {isLoaded ? (
              <div {...css(styles.menuContainer)}>
                <AppBar isAuthenticated={isAuthenticated}/>
              </div>
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
    height: "50px",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(0, 10, 18, 0)",
    display: "flex",
    position: "fixed",
    zIndex: 1,
    // borderBottom: '1px solid #0a0909'
  },
  menuContainer: {
    marginRight: "45px"
  }
};


export default Header;
