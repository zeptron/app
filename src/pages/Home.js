import React from 'react'
import UserContext from '../UserContext'
import Hero from './Components/Hero'
import Below from './Components/Icons'
import Provision from './Components/Provision'
import Configure from './Components/Configure'
// import Results from './Results'
// import Pricing from './Pricing'
import Start from './Components/Start'
import Spacer from 'react-spacer'
import Studio from '../app/Studio/Index'
import Image from '../assets/bg4.jpg'
import CCTV from '../assets/Router_alt.png'
import Stream from '../assets/camx.png'
import ImgLeft from './Components/ImgLeft'
import ImgRight from './Components/ImgRight'
import Hubspot from './Components/Hubspot'
import ConfigureImg from '../assets/configure.png'
import ChartImg from '../assets/charts.png'
import NotificationImg from '../assets/notifications.png'
import Section from './Components/Section'
import {Box, Grid, Button, Hidden} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Building from '../assets/building.png'

class Home extends React.Component {

  static contextType = UserContext

  render() {
    
    const isAuthenticated = this.context.user && this.context.user.username ? true : false
    
    return (
      <div>
        {
          isAuthenticated ? (
            <>
            <Studio/>
            </>
            ) : (
            <div>
            {/* <Hero
            header="Zeptron makes live video smart with AI"
            subheader="Add AI to CCTV in seconds for analytics and automation"
            /> 
            <Section
            /> */}
            <Start
            button="Yes"
            form={
              <Hubspot
                meetcode="/meeting-def"
              />
            }
            />
              <Box p={2} minHeight="100vh" >
              <Grid container alignItems="center" justify="center" style={{height: "100%"}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Plug directly into your CCTV network securely
                  </h2>
                  <p className={s.p}>
                  The Zeptron router connects your CCTV streams to AI in seconds with no code or set up required from you
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Spacer height="50px"/>
                </Grid>
                <Grid item md={6}>
                <Spacer height="50px"/>
                  <img style={{maxWidth: '100%'}} src={CCTV} />
                  <Spacer height="50px"/>
                </Grid>
                </Grid>
                </Grid>
              </Grid>
              </Box>
              <Box p={2} minHeight="100vh">
              <Grid container alignItems="center" justify="center" style={{height: "100%"}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Set up counting and tracking on your cameras in seconds
                  </h2>
                  <p className={s.p}>
                  The Zeptron app makes it easy to set up counting and tracking in seconds using the CCTV cameras at your entrances and exits
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Spacer height="50px"/>
                </Grid>
                <Grid item md={6}>
                <Spacer height="50px"/>
                  <img style={{maxWidth: '100%'}} src={ConfigureImg} />
                  <Spacer height="50px"/>
                </Grid>
                </Grid>
                </Grid>
              </Grid>
              </Box>
            <Box p={2} minHeight="100vh">
                <Grid container alignItems="center" justify="center" style={{height: "100%"}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Get notifications for detections that matter
                  </h2>
                  <p className={s.p}>
                  Get notified via Slack, SMS or email for the notifications that matter to you
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Spacer height="50px"/>
                </Grid>
                <Grid item md={6}>
                <Spacer height="50px"/>
                  <img style={{maxWidth: '100%'}} src={NotificationImg} />
                  <Spacer height="50px"/>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
            </Box>
            <Box p={2} minHeight="100vh" >
                <Grid container alignItems="center" justify="center" style={{height: "100%"}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Use a powerful cloud app to stay in control
                  </h2>
                  <p className={s.p}>
                  Use the powerful cloud-based Zeptron app to stay in control at all times, start new feeds, configure streams, and get analytics
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="secondary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Spacer height="50px"/>
                </Grid>
                <Grid item md={6}>
                <Spacer height="50px"/>
                  <img style={{maxWidth: '100%'}} src={ChartImg} />
                  <Spacer height="50px"/>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
            </Box>
            <Box bgcolor="secondary.dark" color height="100vh" color="primary.contrastText" minHeight='100vh'>
              <Grid container alignItems="center" justify="center" style={{height: '100%'}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={12}>
                <h2 className={`${s.header} ${s.center}`}>
                  Loved by...
                  </h2>
                   <Spacer height="50px"/>
                  <Grid container alignItems="center" justify="center">
                    {/* <Grid item md={4} sm={6}>
                      <img style={{width: 250, maxWidth: '100%'}} src="https://static1.squarespace.com/static/5d7b27bf2da3a5041cc91ffd/t/5d9da5ffbe16a30f8d994aa0/1593416539322/?format=original"/>
                    </Grid> */}
                    <Grid item md={4} sm={6}>
                      <img style={{width: 200, maxWidth: '100%'}} src="https://images.squarespace-cdn.com/content/v1/58038734f5e231804130cf01/1530186594390-OS2HAO6YEGV9ILQAQCW1/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIXpy3a2Cibo6eml5BpILeGX-BY3QvcZT7F317PmmzovI/stone_chalk.png"/>
                    </Grid>
                    <Grid item md={4} sm={6}>
                      <img style={{width: 200, maxWidth: '100%', filter: 'invert(100%)'}} src="https://cdn.concreteplayground.com/content/uploads/2019/04/SRG-Logo-Blk-01.png"/>
                    </Grid>
                  </Grid>
                </Grid>
                </Grid>
                </Grid>
              </Grid>
            </Box>
            <Start
            header="Start getting more value out of your CCTV today"
            form={
              <Hubspot
                meetcode="/meeting-def"
              />
            }
            />
            </div>
          )
        }
      </div>
    )
  }
}

export default Home