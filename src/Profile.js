import React, { useCallback} from 'react'
import { Auth } from 'aws-amplify'
import Container from './Container'
import UserContext from './UserContext'
import s from './styles/styles.module.css'
import {Grid, Box, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Usage from './app/Usage'
import Footer from './components/Common/Footer'
import styled from 'styled-components'

const Price = styled.p`
    color: #ffb04c;
    text-align: center;
    font-size: 6em;
    margin: 0;`

class Profile extends React.Component {
  
  static contextType = UserContext

  render() {
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    return (
     <div>
       <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
       
       <Spacer height="10px"/>
      <Grid container alignItems="center" justify="center">
          <Grid item md={8} xs={12}>
          <h1  className={s.header} style={{textAlign: 'center'}}>
       Hi, {this.context.user.attributes.given_name}  {this.context.user.attributes.family_name}
       </h1>
          </Grid>
      </Grid>
      <Spacer height="50px"/>
      <Button
          variant="contained"
          color="primary"
          size="large"
          href="/"
        >
          <span className={s.ctabutton}>Go To Library</span>
          </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={signOut}
        >
          <span className={s.ctabutton}>Sign Out</span>
          </Button>
          <Spacer height="50px"/>
          
    </Box>
    <Box>
    <Spacer height="50px"/>
    <Grid container alignItems="center" justify="center">
          <Grid item md={8} xs={12}>
            <Usage/>
            </Grid>
            </Grid>
            <Spacer height="50px"/>
    </Box>
    <Footer />
    </div>
    )
  }
}
function getUser() {
const checkUser = ( async () => {
  const user = await Auth.currentAuthenticatedUser();
  console.log(user)
})
}


function signOut() {
  Auth.signOut()
    .then(() => {
      this.props.history.push('/auth')
    })
    .catch(() => console.log('error signing out...'))
}

export default Profile
