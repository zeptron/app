import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import VideocamIcon from '@material-ui/icons/Videocam';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PieChartIcon from '@material-ui/icons/PieChart';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SignUp from '../../SignUp'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
        height: 250,
        width: 250,
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  export default function Hero() {
    const [spacing, setSpacing] = React.useState(2);
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
    text-align: center;
    margin-bottom: 5px;
    
    `
    const Notes = styled.p`
    text-align: center;
    margin: 0px 0px 5px 0px;
    `
   return (
    <Box p={2} bgcolor="primary.dark" color="primary.contrastText" >
         <Grid container justify="center" spacing={spacing}>
            <Grid item md={8} sm={10} xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item xs={12}>
            <Spacer height="40px"/>
            <h2 className={s.header} style={{textAlign: 'center'}}>
            Start browsing models
            </h2>
            <p className={s.subheader}>Sign up now for FREE and start browsing models.<br/> Want to try the platform? Get 5 hours free use every month!</p>
            
            </Grid> 
            
            </Grid> 
            <SignUp/>
            <Spacer height="80px"/>

        </Grid> 
        </Grid>
    </Box>

)
}
