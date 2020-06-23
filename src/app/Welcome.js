import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'

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
       <div>
         <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
        <Spacer height="10px"/>
        <Grid container alignItems="center" justify="center">
        <Grid item md={8} xs={12}>
        <h1  className={s.header} style={{textAlign: 'left'}}>
       Welcome, Jose
       </h1>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item md={4} xs={12}>
        <h3>My Models</h3>
       
        </Grid>
        <Grid item md={4} xs={12}>
        <h3>Model Hours</h3>
        </Grid>
        <Grid item md={12} xs={12}>
        <h3>Notifications</h3>
        </Grid>
        </Grid>
      </Box>
       </div>
   )}