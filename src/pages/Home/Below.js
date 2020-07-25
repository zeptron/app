import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Brain from './animations/brain.js'
import Data from './animations/data.js'
import Results from './animations/results.js'




  export default function Hero() {
    const [spacing] = React.useState(4);
 
   return (

          <Box p={2} style={{backgroundColor: '#253337', color: 'white'}} >
          <Grid container justify="center">
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="50px"/>
            <h2 className={`${s.header} ${s.center}`} >
              Serving
              </h2>
            <Spacer height="50px"/>
              <Grid container  justify="center" spacing={spacing}>
              <Grid item md={4} sm={6}  xs={12}>
              <Spacer height="20px"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Health</h3>
              <img style={{maxWidth: '40%'}} src="https://image.flaticon.com/icons/svg/2904/2904376.svg"/>
              </Grid>
              <Grid item md={4} sm={6}  xs={12}>
              <Spacer height="20px"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Safety</h3>
              <img style={{maxWidth: '40%'}} src="https://image.flaticon.com/icons/svg/1605/1605056.svg"/>
              </Grid>
              <Grid item md={4} sm={6}  xs={12}>
              <Spacer height="20px"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Production</h3>
              <img style={{maxWidth: '40%'}} src="https://image.flaticon.com/icons/svg/1037/1037353.svg"/>
              </Grid>
              <Grid item md={4} sm={6}  xs={12}>
              <Spacer height="20px"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Infrastructure</h3>
              <img style={{maxWidth: '40%'}} src="https://image.flaticon.com/icons/svg/1596/1596544.svg"/>
              </Grid>
              <Grid item md={4} sm={6}  xs={12}>
              <Spacer height="20px"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Management</h3>
              <img style={{maxWidth: '40%'}} src="https://image.flaticon.com/icons/svg/942/942872.svg"/>
              </Grid>
            </Grid>
            </Grid> 
            </Grid>
            <Spacer height="100px"/>
            </Box>
         
     )
    }

    
    

