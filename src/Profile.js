import React from 'react'
import { Auth } from 'aws-amplify'
import Container from './Container'
import Button from './Button'

const user = Auth.currentAuthenticatedUser()

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <h1>Profile</h1>
        <h1>{user.username}</h1>
        <Button
          title="Sign Out"
          onClick={signOut}
        />
      </Container>
    )
  }
}

function signOut() {
  Auth.signOut()
    .then(() => {
      this.props.history.push('/auth')
    })
    .catch(() => console.log('error signing out...'))
}

export default Profile
