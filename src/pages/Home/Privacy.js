import React from 'react';
import {Box, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Image from '../../assets/cctv.jpg'


  export default function Hero() {
    const [spacing] = React.useState(2);
   
    
   return (

          <Box p={2} style={{backgroundColor: '#e0e4e0'}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Hidden smUp>
            <Grid item md={6} xs={12}>
            <img style={{maxWidth: '100%'}} src={Image}/>
            </Grid> 
            </Hidden>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Consume existing video streams
              </h2>
              <p className={s.subheader} >
                Integrate directly with your CCTV system, IP cameras, or wired video hardware
               </p>  
              <Spacer height="60px"/>
            </Grid> 
            <Hidden xsDown>
            <Grid item md={6} xs={12}>
            <img style={{maxWidth: '100%'}} src={Image}/>
            </Grid> 
            </Hidden>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

