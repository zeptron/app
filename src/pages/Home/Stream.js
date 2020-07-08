import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import Stream from '../../assets/stream.png'


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

          <Box p={2} style={{backgroundColor: "#9bd0db"}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="40px"/>
            <Grid container justify="center" alignItems="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Stream data to your model for free
              </h2>
               <p className={s.subheader} style={{textAlign: 'left'}}>Use our free streaming service to send live video, images, or bytes to your model</p>
               <p className={s.subheader} style={{textAlign: 'left'}}>Our camera hardware provides video feeds to the cloud with 20ms or lower latency</p>
              <Spacer height="20px"/>
              {/* <p className={s.subheader} style={{textAlign: 'left'}}><a style={{color: 'black'}} href="#">Learn more about streaming</a></p> */}
              <Spacer height="40px"/>
            </Grid> 
            <Grid item md={6} xs={12}>
             <img style={{maxWidth: '100%'}} src={Stream}/>
            </Grid>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

