import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Touch from '../../assets/touch.png'
import Hidden from '@material-ui/core/Hidden';
import Tracking from '../../assets/tracking.png'


  export default function Hero() {
    const [spacing] = React.useState(2);
   
    
   return (

          <Box p={2} style={{backgroundColor: '#e0e4e0'}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={109} sm={10} xs={12}>
            <Spacer height="40px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Built-in privacy controls
              </h2>
              <p className={s.subheader} style={{textAlign: 'left'}}>Streamed footage is kept on ephemeral storage and destroyed after inference, unless you elect to keep it</p>
               <p className={s.subheader} style={{textAlign: 'left'}}>Model instances and results databases are isolated to eliminate risk of data mixing</p>
              <Spacer height="20px"/>
              <Spacer height="40px"/>
            </Grid> 
           
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

