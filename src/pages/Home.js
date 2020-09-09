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
import {Box, Grid, Button} from '@material-ui/core'
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
            /> */}
            {/* <Section
            /> */}
            <Start
            form={
              <Hubspot
                meetcode="/meeting-def"
              />
            }
            />
            {/* <Box p={2} bgcolor="primary.main" color="primary.contrastText ">
              <Grid container alignItems="center" justify="center">
                <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                <Grid item md={6}>
                  <Spacer height="50px"/>
                  <h2 className={`${s.header} `}>
                  Building analytics
                  </h2>
                  <p style={{textAlign: 'left', fontSize: 'x-large'}}>
                  
                  </p>
                  <Spacer height="50px"/>
                </Grid>
                <Grid item md={6}>
                <Spacer height="50px"/>
                  <img style={{maxWidth: '100%'}} src={Building} />
                  <Spacer height="50px"/>
                </Grid>
                </Grid>
                </Grid>
              </Grid>
            </Box> */}
            </div>
          )
        }
      </div>
    )
  }
}




export default Home