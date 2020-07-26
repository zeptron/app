import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Stream from '../../assets/cam.png'
import Cloud from './animations/data.js'



  export default function Hero() {
    const [spacing] = React.useState(2);
   
   return (

          <Box p={2} >
          <Grid container justify="center" spacing={spacing}>
          <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
            <h2 className={`${s.header} ${s.center}`}>
              Notice minute details with a powerful lens
              </h2> 
              <Spacer height="40px"/>
            </Grid>
            <Grid item md={9} sm={10} xs={10}>
            <Grid container justify="center" alignItems="center" spacing={spacing}>
            
            <Grid item md={6} xs={12}>
             <img style={{maxWidth: '100%'}} src={Stream} />
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

    
    

