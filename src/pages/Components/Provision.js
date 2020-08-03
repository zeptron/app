import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Brain from './animations/brain.js'
import Cloud from './animations/data.js'
import Edge from './animations/results.js'



  export default function Provision() {
    const [spacing] = React.useState(2);
 
   return (

          <Box p={2}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={10}>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
            <Spacer height="80px"/>
            <Brain/>
              <Spacer height="20px"/>
              <h2 className={`${s.header} ${s.center}`} >
              Stay smart <br/>with resources
              </h2>
              </Grid>
              </Grid>
              <Spacer height="25px"/>
              <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
              <Cloud/>
            <p className={`${s.subheader} ${s.center}`}><strong>Cloud</strong></p>
            <p style={{marginBottom: 0}} className={`${s.subheader} ${s.center}`}>Scale and manage easily</p>
            <p style={{marginTop: 0}}  className={`${s.subheader} ${s.center}`}>Pay per hour for compute</p>
            </Grid> 
            <Grid item md={6} xs={12}>
              <Edge/>
            <p className={`${s.subheader} ${s.center}`}><strong>Edge</strong></p>
            <p style={{marginBottom: 0}} className={`${s.subheader} ${s.center}`}>Install compute on-site</p>
            <p style={{marginTop: 0}}  className={`${s.subheader} ${s.center}`}>Only send results to the cloud</p>
            </Grid> 
            </Grid>
             <Spacer height="80px"/>
            </Grid> 
            </Grid>
            </Box>
         
     )
    }

    
    

