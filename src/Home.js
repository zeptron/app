import React from 'react'
import { Auth } from 'aws-amplify'
import { css } from 'glamor'
import UserContext from './UserContext'
import Hero from './components/Public/Hero'
import Below from './components/Public/Below'
import Results from './components/Public/Results'
import Pricing from './components/Public/Pricing'
import Start from './components/Public/Start'
import Footer from './components/Common/Footer'
import Spacer from 'react-spacer'
import Welcome from './components/App/Welcome'

class Home extends React.Component {
  state = {
    qrCode: '',
    challengeAnswer: '',
    showPreferred: false
  }
  static contextType = UserContext

  addTTOP = () => {
    const { user } = this.context
    Auth.setupTOTP(user).then((code) => {
      const authCode = "otpauth://totp/AWSCognito:"+ user.username + "?secret=" + code + "&issuer=AWSCognito";
      this.setState({
        qrCode: authCode,
        showPreferred: true
      })
    });
  }
  setPreferredMFA = (authType) => {
    const { user } = this.context
    Auth.verifyTotpToken(user, this.state.challengeAnswer).then(() => {
      Auth.setPreferredMFA(user, authType)
        .then(data => console.log('data from verify...: ', data))
        .catch(err => console.log('error: ', err))
    });
  }
  render() {
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    return (
      <div>
        
        
        
        {
          isAuthenticated ? (
            <>
            <div>
              {/* <Welcome/> */}
              <Spacer height="100px"/>
              <h1>The platform is undergoing scheduled maintenace</h1>
              <h1>Please try again later</h1>
              <Spacer height="100px"/>
              </div>
              {/* <Button
                title="Update TOTP"
                onClick={this.addTTOP}
              />
              <div {...css(styles.buttonContainer)}>
                {
                  (this.state.qrCode !== '') && (
                    <div>
                      <br />
                      <QRCode value={this.state.qrCode} />
                    </div>
                  )
                }
                {
                  this.state.showPreferred && (
                    <div {...css(styles.buttonContainer)}>
                      <button
                        onClick={() => this.setPreferredMFA('TOTP')}
                        {...css(styles.button)}
                      >
                        <p>Prefer TOTP</p>
                      </button>
                      <button
                        onClick={() => this.setPreferredMFA('SMS')}
                        {...css(styles.button)}
                      >
                        <p>Prefer SMS</p>
                      </button>
                      <input
                        placeholder='TOTP Code'
                        onChange={e => this.setState({ challengeAnswer: e.target.value })}
                        {...css(styles.input)}
                      />
                    </div>
                  )
                }
              </div>
             */}
             </>
          ) : (
            <div>
            <Hero/>
            <Below/>
            <Results/>
            <Pricing/>
            <Start/>
            <Footer/>
            </div>
          )
        }
      </div>
    )
  }
}

const styles = {
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    cursor: 'pointer',
    margin: 4,
    border: '1px solid #ddd',
    width: 225,
    ':hover': {
      backgroundColor: "rgba(0, 0, 0, .1)"
    }
  },
  input: {
    padding: 8,
    height: 40,
    width: 225,
    border: '1px solid #ddd'
  }
}


export default Home