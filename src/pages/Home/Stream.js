import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Stream from '../../assets/stream.png'



  export default function Hero() {
    const [spacing] = React.useState(2);
   
   return (

          <Box p={2} >
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={9} sm={10} xs={12}>
            <Spacer height="40px"/>
            <Grid container justify="center" alignItems="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Stream data to your model for free
              </h2>
               <p className={s.subheader} style={{textAlign: 'left'}}>Use our free streaming service to send live video securely to your model</p>
               <p className={s.subheader} style={{textAlign: 'left'}}>Our cameras provide video streams to the cloud with up to 20ms latency</p>
             
              {/* <p className={s.subheader} style={{textAlign: 'left'}}><a style={{color: 'black'}} href="/streaming">Learn more</a></p> */}
              <Spacer height="40px"/>
            </Grid> 
            <Grid item md={6} xs={12}>
             <img alt="free low-latency video streaming" style={{maxWidth: '100%'}} src={Stream}/>
            </Grid>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

