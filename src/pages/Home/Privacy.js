import React from 'react';
import {Box, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Image from '../../assets/cctv.jpg'
import ReactPlayer from 'react-player'

  export default function Hero() {
    const [spacing] = React.useState(2);
   
    
   return (

          <Box p={2} style={{backgroundColor: '#e0e4e0'}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Hidden xsDown>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header}>
              Consume existing video streams
              </h2>
              <p className={s.subheader} >
Use Zeptron on your existing CCTV network, IP Cameras, or wired hardware               </p>  
              <Spacer height="60px"/>
            </Grid> 
            </Hidden>
            <Grid item md={6} xs={12}>
            {/* <ReactPlayer 
                pip="true" 
                muted 
                width="100%" 
                playing="true" 
                url='https://vimeo.com/441931886' 
            /> */}
            <img src={Image} style={{maxWidth: '100%'}}/>
            </Grid> 
            <Hidden smUp>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Consume existing video streams
              </h2>
              <p className={s.subheader} >
              Use Zeptron on your existing CCTV network, IP Cameras, or wired hardware               </p>  
             
              <Spacer height="60px"/>
            </Grid> 
            </Hidden>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

