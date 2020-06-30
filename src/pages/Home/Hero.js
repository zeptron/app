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
            <Grid item md={8} xs={12}>
                   <h1  className={s.header} style={{textAlign: 'center'}}>
                    A marketplace for AI
                    </h1>
            </Grid>
        </Grid>
                
      <Box>
        <Grid container justify="center" spacing={spacing}>
          <Grid item md={8}>
            <Grid container justify="center" spacing={spacing}>
              <Grid item md={3} xs={10}>
                <Data/>
                <h3 className={s.heroh3}>Connect your data </h3>
              </Grid>
              <Grid item md={3} xs={10}>
                <Brain/>
                <h3 className={s.heroh3}>Choose a model</h3>
              </Grid>
              <Grid item md={3} xs={10}>
                <Results/>
                <h3 className={s.heroh3}>Get results</h3>
              </Grid>
            </Grid>
      </Grid> 
      </Grid>
      </Box>
             
      <Spacer height="120px"/>
           
      <Box>
      <Grid container justify="center">
      <Grid item xs={12}>
      <Button size="large" variant="contained" color="secondary" href="/auth">
      <span className={s.ctabutton}>Start Now for FREE</span>
      </Button>
      </Grid>
      </Grid>
      <Spacer height="80px"/>
      </Box>
    </Box>  
  )
}