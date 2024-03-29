import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Stream from '../../assets/cam_hd.png'

  export default function Hero() {
    const [spacing] = React.useState(2);
   
   return (

          <Box p={2} >
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container justify="center" alignItems="center" spacing={spacing}>
            <Grid item md={6} sm={9} xs={12}>
            <Spacer height="40px"/>
            <h2 className={`${s.header}`}>
              Set up new Ultra-HD video streams with our cameras
              </h2> 
              <Spacer height="40px"/>
              <p className={s.subheader} >
                Camera body is 3D printed with ethernet, 802.11 bgn wireless, and GPIO pins
               </p> 
            </Grid>
            <Grid item md={6} xs={12}>
              <div style={{textAlign: 'center'}}>
             <img alt="Stream in 4k using Zeptron's cameras" style={{maxWidth: '100%'}} src={Stream} />
             </div>
            </Grid>
            </Grid>
            <Spacer height="80px"/>
            <Grid container justify="center" alignItems="center" spacing={spacing}>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

