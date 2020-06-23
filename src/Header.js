import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'
import UserContext from './UserContext'
import { flex } from 'styled-system'
import s from './styles/styles.module.css'
import AppBar from './components/Nav/AppBar'
import Button from "@material-ui/core/Button";


class Header extends React.Component {
  static contextType = UserContext
  render() {
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    const isLoaded = this.context.isLoaded
    return (
      <div {...css(styles.container)}>
        
        <Link to='/' {...css(styles.link)}>
          <h2 className={s.title}>Zeptron</h2>
        </Link>
        
        <div {...css(styles.navContainer)}>
          {
            isLoaded ? isAuthenticated ? (
              <div>
                <AppBar/>
              </div>
            ) : (
              <div>
                <Button href="/about" variant="contained" >
                  About
                </Button>
                <Button href="/about" variant="contained" >
                  Sign In
                </Button>
                {/* <Link to='/about' {...css(styles.link)}>
              <p className={s.navItem}>About</p>
            </Link>
              <Link to='/auth' {...css(styles.link)}>
                <p className={s.navItem}>Sign In</p>
              </Link> */}
              
            </div>
            ) : null
            
          }
       </div>
      </div>
    )
  }
}

const styles = {
  amplifyLogo: {
    height: 30,
    marginLeft: 25,

    marginBottom: 5
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    flex: 1,
    paddingLeft: 50,
    marginTop: 6
  },
  link: {
    textDecoration: 'none',
    display: 'inline-flex',
  },
  
  container: {
    height: '80px',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000a12',
    display: 'flex',
    
  }
}

export default Header
