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
    text-align: left;
    margin-bottom: 5px;
    `
    const Notes = styled.p`
    text-align: left;
    margin: 0px 0px 10px 0px;
    `
   return (
       <div>
        <Box p={2}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item md={8} sm={10} xs={12}>
            <Grid container justify="center" spacing={spacing}>
            <Grid item xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'center'}}>
              Pricing
              </h2>
              <p className={s.subheader}>Start now with no technical skills, training or setup required. Or, integrate the model into your own app using our API and JSON feeds</p>
              <Spacer height="40px"/>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
        </Box>
       </div>

)
}
