import React from 'react'
import {Box, Grid} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Spacer from 'react-spacer'
import Top from '../assets/top.jpg'
import IPad from '../assets/ipad.png'

export default function Streaming() {

    return (
        <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                    <Spacer height="100px"/>
                    <Grid container alignItems="center" justify="center">
                      <Grid item md={8} xs={12}>
                        <h1  className={s.header} style={{textAlign: 'center'}}>Free Low-Latency Video Streaming for Cloud-based Computer Vision</h1>
                      </Grid>
                      </Grid>
                      <Spacer height="100px"/>
            </Box>
            <Box>
            <Spacer height="100px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} xs={12}>
                    <h2 className={s.header}>
                        Zeptron Cloud-Connected Camera
                    </h2>
                    <Grid container alignItems="center" justify="center">
                    <Grid item md={12} xs={12}>
                        <img style={{maxWidth: '50%'}} src={Top} />
                    </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="center">
                    <Grid item md={6} xs={12}>
                        <h4 className={s.subheader}>
                            Features
                        </h4>
                        <p  className={s.subclass}>
                            1 x Ethernet 
                        </p>
                        <p  className={s.subclass}>
                            802.11 bgn wireless
                        </p>
                        <p  className={s.subclass}>
                            2 x USB 2.0 
                        </p>
                        <p  className={s.subclass}>
                            2 x USB 3.0 
                        </p>
                        <p  className={s.subclass}>
                            Tripod Mount
                        </p>
                        <p  className={s.subclass}>
                            Active Fan Cooling
                        </p>

                    </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Spacer height="100px"/>
            <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="100px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8}>
                <h2 className={s.header}>
                        Easy Browser-Based Configuration
                    </h2>
                    <img src={IPad} style={{maxWidth: '100%'}}/>
                </Grid>
            </Grid>
            <Spacer height="100px"/>
            </Box>
            </Box>
        </div>
    )
}