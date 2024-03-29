import React from 'react';
import {Box, Button, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'


  export default function Hero(props) {
    const [spacing] = React.useState(2);
   return (
          <Box p={2} style={{backgroundColor: '#e0e4e0'}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Hidden xsDown>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header}>
              {props.header}
              </h2>
              <p className={s.subheader} >
              {props.subheader}
              </p>  
              <Spacer height="60px"/>
              
            </Grid> 
            </Hidden>
            <Grid item md={6} xs={12}>
              {props.asset}
            </Grid> 
            <Hidden smUp>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header}>
              {props.header}
              </h2>
              <p className={s.subheader} >
              {props.subheader}</p>
              <Spacer height="60px"/>
              <Button href="#start" color="secondary" size="small" variant="contained">
              Get Started
              </Button>
            </Grid> 
            </Hidden>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
     )
    }

    
    

