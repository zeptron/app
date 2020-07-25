import React from 'react'
import s from '../styles/styles.module.css'
import {Hidden, Box, Grid} from '@material-ui/core'
import Spacer from 'react-spacer'

export default function Masks(){

    return (
        <div>
        <Box bgcolor="primary.dark" color="primary.contrastText" >
        <Spacer height="100px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={10} sm={10} xs={12}>
                    <Grid container alignItems="center" justify="center">
                    <Grid item md={6}>
                    <h1  className={`${s.header} ${s.center}`}>
                       Face mask detection using AI                    
                       </h1>
                       <Spacer height="20px"/>
                  <p className={`${s.subheader} ${s.center}`}>
                      Mask detection without facial recognition for charted analysis and real-time alerts
                  </p>
                  </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Spacer height="100px"/>
        </Box>
        <Box>
            
        </Box>
       
         
        </div>
    )
}