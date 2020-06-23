import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import Data from './animations/data'
import Brain from './animations/brain'
import Results from './animations/results'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
      width: 200,
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(4),
    },
  }));


  export default function Hero() {
    const [spacing, setSpacing] = React.useState(8);
    const classes = useStyles();
    const Text = styled.p`
    color: white;
    text-align: left;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    `
    const BoxHeading = styled.h3`
    text-transform: uppercase;
    `
   return (
      
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
       <Spacer height="10px"/>
        <Grid container alignItems="center" justify="center">
            <Grid item md={8} xs={12}>
                   <h1  className={s.header} style={{textAlign: 'center'}}>
                    A model-agnostic platform for working with artificial intelligence models
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