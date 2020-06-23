import React from 'react'
import {Box, Button, Grid} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import Footer from '../../components/Common/Footer'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import DeepFace1 from '../../assets/deepface1.jpeg'
import DeepFace2 from '../../assets/deepface2.jpeg'



export default function DeepFace() {
    return ( 
    <div>
        <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={5} readOnly />
                </Box>
                    <h1 className={s.header}>Facial recognition</h1>
                    <p className={s.subheader}>Attribute analysis, face verification, reverse database lookup</p>
                    <Spacer height="25px"/>
                    <Button size="large" variant="contained" color="tertiary" href="/contact">
                <span className={s.ctabutton}>Contact us to activate</span>
              </Button>
              <Spacer height="25px"/>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        
        <Box >
        <Spacer height="50px"/>
        <Grid container alignItems="center" justify="center">
                <Grid item md={10} sm={12} xs={12}>
                <Spacer height="50px"/>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={6} sm={12} xs={12}>
                        <img src={DeepFace1} style={{maxWidth: '100%'}}/>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <img src={DeepFace2} style={{maxWidth: '100%'}}/>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
         </Box>
         
        <Footer />
    </div>
    )
}