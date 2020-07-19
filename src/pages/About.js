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
                        Deploy computer vision solutions in minutes
                    </h1>
                    </Grid>
                    </Grid>

            <Spacer height="30px"/>
            <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                   <p style={{color: 'white', textAlign: 'center'}} className={s.subheader}>Make your computer vision models useful with the tools and features you need to deploy them in the field in minutes</p>

                   </Grid>
               </Grid>

            <Spacer height="60px"/>
           
            <Box>
            <Grid container justify="center" alignItems="center" >
                <Grid item xs={12}>
                 <div style={{textAlign: 'center'}}>
                <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Start Now for FREE</span>
              </Button>
              </div>
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
             
              <p style={{textAlign: 'center'}} className={s.subheader}>As computer vision enthusiasts ourselves, we created Zeptron as an an easy, scalable, and robust way to deploy computer vision applications </p>
              <p style={{textAlign: 'center'}} className={s.subheader}>Zeptron works with any model or framework to provision, configure, and feed your cloud-based AI</p>
              <p style={{textAlign: 'center'}} className={s.subheader}>Configure tracking, get detection alerts through SMS, iOS or Slack, and automatically chart inference results </p>
              <p style={{textAlign: 'center'}} className={s.subheader}>Start getting value from computer vision faster with easy, code-free deployment</p>
             
              </Grid>
                <Spacer height="80px"/>
                <div style={{textAlign: 'center'}}>
                <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Start Now</span>
                </Button>
                </div>
                <Spacer height="80px"/>
              </Grid>
              </Grid>
              </Box>
              </div>
            
         
     )
    }

    
    

