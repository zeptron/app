import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'



  export default function Hero() {
    const [spacing] = React.useState(2);
 
   return (

          <Box p={2} style={{backgroundColor: '#253337', color: 'white'}} >
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={9} sm={10} xs={12}>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={8} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} >
              what we do
              </h2>
               <p className={s.subheader} >Zeptron makes it easy to deploy computer vision</p>
               <p className={s.subheader} >We provide you with low-latency cameras and an interface that binds to any computer vision model</p>
               <p className={s.subheader} >Start receiving notifications, live video inference feeds, and charted results in under 2 minutes</p>
              <Spacer height="40px"/>
            </Grid> 
            
            </Grid>
            <Spacer height="40px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

