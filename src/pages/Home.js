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
import Clock from '../assets/clock1.svg'
import Tech from '../assets/computing1.svg'
import Router from '../assets/wifi-router.svg' 
import Internet from '../assets/internet1.svg'
import Patience from '../assets/pray1.svg'
import Technician from '../assets/workers1.svg'
import Table from './Components/Table'

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
            <Hero/>
            {/* <Start
            button="Yes"
            form={
              <Hubspot
                meetcode="/meeting-def"
              />
            }
            /> */}
              <Box p={2} >
              <Grid container alignItems="center" justify="center" >
                <Grid item md={8}>
                <Spacer height="200px"/>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <h2 className={`${s.header} `}>
                  Route CCTV streams to cloud AI securely
                  </h2>
                  <p className={s.p}>
                  The Zeptron router connects your CCTV streams to cloud-based GPU in seconds with no code or set up required from you
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
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
                <Spacer height="200px"/>
                </Grid>
              </Grid>
              </Box>

              <Box p={2} >
              <Spacer height="200px"/>
              <Grid container alignItems="center" justify="center" style={{height: "100%"}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Configure actions and notifications for each class from the UI
                  </h2>
                  <p className={s.p}>
                  The Zeptron app makes it easy to set up counting and tracking in seconds using the CCTV cameras at your entrances and exits
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
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
              <Spacer height="200px"/>
              </Box>
            <Box p={2} >
            <Spacer height="200px"/>
                <Grid container alignItems="center" justify="center" style={{height: "100%"}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Get push notifications for important detections
                  </h2>
                  <p className={s.p}>
                  Get notified via Slack, SMS or email for the notifications that matter to you
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
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
                <Spacer height="200px"/>
            </Box>
            <Box p={2} >
            <Spacer height="200px"/>
                <Grid container alignItems="center" justify="center" style={{height: "100%"}}>
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Analyse data with our cloud-based app
                  </h2>
                  <p className={s.p}>
                  Use the powerful cloud-based Zeptron app to stay in control at all times, start new feeds, configure streams, and get analytics
                  </p>
                  <Hidden smUp>
                  <div style={{textAlign: 'center'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
                    <strong>Start</strong>
                  </Button>
                  </div>
                  </Hidden>
                  <Hidden smDown>
                  <div style={{textAlign: 'left'}}>
                  <Button variant="contained" size="large" color="primary" href="#start">
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
                <Spacer height="200px"/>
            </Box>

            <Box bgcolor="primary.light" color="primary.contrastText" p={2}>
            <Spacer height="200px"/>
              <Grid container alignItems="center" justify="center">
                <Grid item md={8}>
                  <Grid container alignItems="center" justify="center">
                    <Grid item md={6}>
                    <h2 className={`${s.header} ${s.center}`}>
                      What you need 
                      </h2>
                      <Spacer height="100px"/>
                    </Grid>
                    <Grid container alignItems="center" justify="center">
                      <Grid item md={2} sm={4} xs={6}>
                      <img src={Clock} style={{maxWidth: '50px'}}/>
                      <p style={{color: '#7F8E93'}}>time</p>
                      </Grid>
                      <Grid item md={2} sm={4} xs={6}>
                      <img src={Tech} style={{maxWidth: '50px'}}/>
                      <p style={{color: '#7F8E93'}}>tech skills</p>
                      </Grid>
                      <Grid item md={2} sm={4} xs={6}>
                      <Box p={2} m={1} style={{border: '1px solid #e1e1e1', marginBottom: 25}}>
                      <img src={Router} style={{maxWidth: '50px'}}/>
                      <p style={{marginBottom: 0}}><strong>router</strong></p>
                      </Box>
                      </Grid>
                      <Grid item md={2} sm={4} xs={6}>
                      <Box p={2} m={1} style={{border: '1px solid #e1e1e1', marginBottom: 25}}>
                      <img src={Internet} style={{maxWidth: '50px'}}/>
                      <p style={{marginBottom: 0}}><strong>internet</strong></p>
                      </Box>
                      </Grid>
                      <Grid item md={2} sm={4} xs={6}>
                      <img src={Patience} style={{maxWidth: '50px'}}/>
                      <p style={{color: '#7F8E93'}}>patience</p>
                      </Grid>
                      <Grid item md={2} sm={4} xs={6}>
                      <img src={Technician} style={{maxWidth: '50px'}}/>
                      <p style={{color: '#7F8E93'}}>technician</p>
                      </Grid>
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Spacer height="200px"/>
            </Box>

            <Box p={2}>
            <Spacer height="200px"/>
              <Grid container alignItems="center" justify="center">
                <Grid item md={8}>
                <h2 className={`${s.header} ${s.center}`}>
                      Pricing
                      </h2>
                      <p className={`${s.p} ${s.center}`}>You are not required to purchase a router. </p>
                      <p className={`${s.p} ${s.center}`}>Our streaming package runs on any Mac / PC / Linux computer.</p>
                      <Spacer height="50px"/>
                <Table/>
                </Grid>
              </Grid>
              <Spacer height="200px"/>
            </Box>

           

            <Start
            header="Turn your CCTV network into an active management tool today"
            form={
              <Hubspot
                meetcode="/meeting-def"
              />
            }
            />

            <Box p={2}>
            <Spacer height="200px"/>
              <Grid container alignItems="center" justify="center">
                <Grid item md={8}>
                <h2 className={`${s.header} ${s.center}`}>
                      Developer Features
                </h2>
                <Grid container >
                  <Grid item md={6}>
                    <ul style={{textAlign: 'left'}} className={s.p}>
                      <li>
                        streaming package sends 20ms HD feed from Mac / PC / Linux / RPI
                      </li>
                      <li>
                        add new models via AMI
                      </li>
                      <li>
                       app launches instance from model AMI
                      </li>
                      <li>
                       app automatically creates table to hold inference results
                      </li>
                    </ul>
                  </Grid>
                  <Grid item md={6}>
                    <ul style={{textAlign: 'left'}} className={s.p}>
                      <li>
                        start / stop / run instance from UI
                      </li>
                      <li>
                        set up counting and notifications for each class from UI
                      </li>
                      <li>
                       grant access to instances to other users
                      </li>
                      <li>
                       cut costs with multiple cameras / instance
                      </li>
                    </ul>
                  </Grid>
                </Grid>
                </Grid>
              </Grid>
              <Spacer height="200px"/>
            </Box>
            </div>
          )
        }
      </div>
    )
  }
}

export default Home