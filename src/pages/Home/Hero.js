import React from 'react';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Data from './animations/data'
import Brain from './animations/brain'
import Results from './animations/results'


  export default function Hero() {
    const [spacing] = React.useState(8);
  
   return (
      
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
       <Spacer height="10px"/>
        <Grid container alignItems="center" justify="center">
            <Grid item md={10} xs={12} style={{textAlign: 'left'}}>
                   <h1  className={s.header} style={{textAlign: 'left'}}>
                    Artificial intelligence made simple
                    </h1>
                    <p className={s.subheader} style={{textAlign: 'left'}}>
                      Provision, configure and run complicated models without touching a single line of code
                    </p>
                    <Spacer height="40px"/>
                    <Button size="large" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Start Now for FREE</span>
                    </Button>
            </Grid>
        </Grid>
      <Spacer height="60px"/>
    </Box>  
  )
}