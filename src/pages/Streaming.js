import React from 'react'
import {Box, Grid} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Spacer from 'react-spacer'
import Top from '../assets/top.jpg'

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
                    <Grid container alignItems="center" justify="center">
                    <Grid item md={6} xs={12}>
                        <img style={{maxWidth: '50%'}} src={Top} />
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Spacer height="100px"/>
            </Box>
        </div>
    )
}