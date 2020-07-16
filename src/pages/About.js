import React from 'react';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Spacer from 'react-spacer'


  export default function About() {
    
   return (
        <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <Spacer height="10px"/>
                <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                   <Spacer height="100px"/>
                    <h1  className={s.header} style={{textAlign: 'center'}}>
                        Easy acccess to computer vision for good
                    </h1>
                    </Grid>
                    </Grid>

            <Spacer height="30px"/>
            <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                   <p style={{color: 'white'}} className={s.subheader}>Zeptron provides you with a user-friendly platform for working with computer vision as well as a library of pre-trained models</p>

                   </Grid>
               </Grid>

            <Spacer height="60px"/>
           
            <Box>
            <Grid container justify="center"    >
                <Grid item xs={12}>
                <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Start Now for FREE</span>
              </Button>
              </Grid>
              </Grid>
              <Spacer height="80px"/>
              </Box>
            </Box>
            <Box p={2}>

            <Grid container justify="center" >
              <Grid item md={6} sm={10} xs={10}>
              <Grid container justify="center" >
              <Spacer height="80px"/>
              <p className={s.subheader}>While working on a computer vision project, we discovered that there was no way to use our model without getting deeply immersed in code.</p>
              <p className={s.subheader}>So we created a better way.</p>
              <p className={s.subheader}>In less than a minute, add a model to your library, provision it, configure it, and start getting results. </p>
              <p className={s.subheader}>Zeptron enables anyone to use computer vision as a useful tool without needing a single line of code.</p>
              <p className={s.subheader}>Powerful cloud-based AI is one tap away.</p>
              </Grid>
                <Spacer height="80px"/>
                <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Start Now</span>
                </Button>
                <Spacer height="80px"/>
              </Grid>
              </Grid>
              </Box>
              </div>
            
         
     )
    }

    
    

