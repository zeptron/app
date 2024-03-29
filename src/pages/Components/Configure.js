import React from 'react';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Touch from '../../assets/ipadtrain.png'


  export default function Hero() {
    const [spacing] = React.useState(2);
   
   return (

          <Box p={2} style={{backgroundColor: '#e0e4e0'}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={109} sm={10} xs={10}>
            <Spacer height="80px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
             <Grid item md={6} xs={12}>
             <Spacer height="20px"/>
             <img alt="iPad app for using computer vision AI" src={Touch} style={{maxWidth: '100%'}}/>
             <Spacer height="20px"/>
              <h2 className={`${s.header} ${s.center}`} >
              Hold results in your palm immediately with our app
              </h2>
               <p className={`${s.subheader} ${s.center}`} >Get a live inference feed, notifications, and results charted in real time</p>
              <Spacer height="20px"/>
              <Button href="/app" color="primary" size="large" variant="contained">
              Learn More
              </Button>
              <Spacer height="40px"/>
            </Grid> 
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

