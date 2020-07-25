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
            <Spacer height="40px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Hidden smUp>
            <Grid item md={6} xs={12}>
            <img style={{maxWidth: '100%'}} src={Image}/>
            </Grid> 
            </Hidden>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Connect existing streams to AI
              </h2>
              <p className={s.subheader} >
                Point cameras to your model and get streaming video and data back
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

    
    

