import React from 'react';
import {Box, Button, Grid, Hidden} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Spacer from 'react-spacer'
import SEO from '../utils/SEO'

  export default function About() {
    
   return (
        <div>
          <SEO 
          title="Zeptron - About | A code free deployment solution for computer vision"
          path="about"
          />
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <Spacer height="10px"/>
                <Grid container alignItems="center" justify="center">
                   <Grid item md={4} xs={12}>
                   <Spacer height="100px"/>
                    <h1  className={`${s.header} ${s.center}`}>
                        Cut deploy time to 2 minutes
                    </h1>
                    </Grid>
                    </Grid>

            <Spacer height="30px"/>
          

            <Spacer height="60px"/>
           
            <Box>
            <Grid container justify="center" alignItems="center" >
                <Grid item xs={12}>
                <Hidden xsDown>
                    <Button size="large" variant="contained" color="secondary" href="/login">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <div className={s.center}>
                    <Button size="small" variant="contained" color="secondary" href="/login">
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
             
              {/* <p className={`${s.subheader} ${s.center}`}>As computer vision enthusiasts ourselves, we created Zeptron as an an easy, scalable, and robust way to deploy computer vision applications </p> */}
              <p className={`${s.subheader} ${s.center}`}>When there was no large-scale way to deploy our model, we made one.</p>
             </Grid>
                <Spacer height="80px"/>
                <Hidden xsDown>
                    <Button size="large" variant="contained" color="secondary" href="/login">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <div className={s.center}>
                    <Button size="small" variant="contained" color="secondary" href="/login">
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

    
    

