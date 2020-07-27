import React from 'react';
import {Box, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Stream from '../../assets/cam.png'
// import Cloud from './animations/data.js'
import ReactPlayer from 'react-player'

  export default function Hero() {
    const [spacing] = React.useState(2);
   
   return (

          <Box p={2} >
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container justify="center" alignItems="center" spacing={spacing}>
            <Hidden smUp>
            <Grid item md={6} sm={9} xs={12}>
            <Spacer height="40px"/>
            <h2 className={`${s.header}`}>
              Detect small details with a powerful lens
              </h2> 
              <Spacer height="40px"/>
            </Grid>
            </Hidden>
            <Grid item md={6} xs={12}>
                <ReactPlayer 
                playing="true" 
                muted 
                width="100%" 
                pip="true"
                url="https://vimeo.com/441935476"/>
            </Grid>
            <Hidden xsDown>
            <Grid item md={6} sm={9} xs={12}>
            <Spacer height="40px"/>
            <h2 className={`${s.header}`}>
              Detect small details with a powerful lens
              </h2> 
              <Spacer height="40px"/>
            </Grid>
            </Hidden>
            </Grid>
            <Spacer height="80px"/>
            <Grid container justify="center" alignItems="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
              <div style={{textAlign: 'center'}}>
             <img style={{maxWidth: '100%'}} src={Stream} />
             </div>
            </Grid>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <p className={s.subheader} style={{fontSize: '2.2em', fontWeight: '700', textTransform: 'uppercase'}}>4K / 120 FPS Lens</p>
             
               <p className={s.subheader} >
                Control computer features ethernet, 802.11 bgn wireless and GPIO pins
               </p>  
               <p className={s.subheader}>
               3D printed casing
               </p>
              <Spacer height="40px"/>
            </Grid> 

            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

