import React from 'react'
import {Box, Button, Grid} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import Footer from '../Common/Footer'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Right from '../../assets/openposer.gif'
import Left from '../../assets/openposel.gif'

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
                    <h1 className={s.header}>OPENPOSE</h1>
                    <p className={s.subheader}>130 human body part keypoints</p>
                    <Spacer height="25px"/>
                    <Button size="large" variant="contained" color="secondary" href="/model/openpose">
                <span className={s.ctabutton}>Start with this model</span>
              </Button>
              <Spacer height="25px"/>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        
        <Box bgcolor="primary.light">
        <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
            <Spacer height="50px"/>
                <Grid item md={4} sm={12} xs={12}>
                    <img src={Left} style={{maxWidth: '100%'}}/>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                    <img src={Right} style={{maxWidth: '100%'}}/>
            </Grid>
         </Grid>
         <Spacer height="50px"/>
         </Box>
         
        <Footer />
    </div>
    )
}