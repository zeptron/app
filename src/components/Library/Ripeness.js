import React from 'react'
import {Box, Button, Grid} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import Footer from '../Common/Footer'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Coco from '../../assets/coco.gif'
import YouTube from 'react-youtube'

export default function Currency() {
    return ( 
    <div>
        <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={5} readOnly />
                </Box>
                    <h1 className={s.header}>Tomato Ripeness</h1>
                    <p className={s.subheader}>Transfer learning is available for other fruits & vegetables</p>
                    <Spacer height="25px"/>
                    <Button size="large" variant="contained" color="tertiary" href="#">
                <span className={s.ctabutton}>Upgrade to use model</span>
              </Button>
              <Spacer height="25px"/>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        <Box>
             <Spacer height="50px"/>
            <Grid container alignItems="top" justify="center">
                <Grid item md={6} sm={6} xs={12}>
                <h3 className={s.subclass}>Demo Video</h3>
                    <Box p={4}>
                    <Spacer height="20px"/>
                <YouTube videoId="8PxkjMgXlEw" />
                </Box>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        <Footer />
    </div>
    )
}