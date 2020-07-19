import React from 'react';
import {Box, Button, Grid, Hidden} from '@material-ui/core'
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
                    <h1  className={`${s.header} ${s.center}`}>
                        Deploy computer vision solutions in minutes
                    </h1>
                    </Grid>
                    </Grid>

            <Spacer height="30px"/>
            <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                   <p style={{color: 'white'}} className={`${s.subheader} ${s.center}`}>Make your computer vision models useful with the tools and features you need to deploy them in the field in minutes</p>

                   </Grid>
               </Grid>

            <Spacer height="60px"/>
           
            <Box>
            <Grid container justify="center" alignItems="center" >
                <Grid item xs={12}>
                <Hidden xsDown>
                    <Button size="large" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <div className={s.center}>
                    <Button size="small" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </div>
                    </Hidden>
              </Grid>
              </Grid>
              <Spacer height="80px"/>
              </Box>
            </Box>
            <Box p={2}>

            <Grid container justify="center" >
              <Grid item md={6} sm={10} xs={10}>
              <Grid container alignItems="center" >
              <Spacer height="80px"/>
             
              <p className={`${s.subheader} ${s.center}`}>As computer vision enthusiasts ourselves, we created Zeptron as an an easy, scalable, and robust way to deploy computer vision applications </p>
              <p className={`${s.subheader} ${s.center}`}>Zeptron works with any model or framework to provision, configure, and feed your cloud-based AI</p>
              <p className={`${s.subheader} ${s.center}`}>Configure tracking, get detection alerts through SMS, iOS or Slack, and automatically chart inference results </p>
              <p className={`${s.subheader} ${s.center}`}>Start getting value from computer vision faster with easy, code-free deployment</p>
             
              </Grid>
                <Spacer height="80px"/>
                <Hidden xsDown>
                    <Button size="large" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <div className={s.center}>
                    <Button size="small" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </div>
                    </Hidden>
                <Spacer height="80px"/>
              </Grid>
              </Grid>
              </Box>
              </div>
            
         
     )
    }

    
    

