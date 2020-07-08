import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import Touch from '../../assets/touch.png'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      height: 350,
      width: 250,
      padding: theme.spacing(2),
      textAlign: 'center',

    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  export default function Hero() {
    const [spacing] = React.useState(2);
    const classes = useStyles();
    
    const BoxHeading = styled.h3`
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 5px;
    `
    const Notes = styled.p`
    text-align: left;
    margin: 0px 0px 10px 0px;
    `
   return (

          <Box p={2} style={{backgroundColor: "#e4c38f"}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="40px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
              <img style={{maxWidth: '100%'}} src={Touch}/>
              </Grid>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Set up model actions easily
              </h2>
               <p className={s.subheader} style={{textAlign: 'left'}}>Configure tracking, multi-directional counting, and smart detection alerts for your models</p>
              <Spacer height="40px"/>
            </Grid> 
            
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

