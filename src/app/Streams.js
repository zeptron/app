import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid, Paper} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Footer from '../components/Common/Footer'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 350,
      width: '100%',
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(4),
    },
  }));


  export default function Library() {
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
                <h1  className={s.header} style={{textAlign: 'center'}}>
                Streams               
                </h1>
                <Box>
                    <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Box>
                
                <Spacer height="100px"/>
                <h3 className={s.subclass}>0 streams configured</h3>
                <Spacer height="100px"/>
            </Box>
            <Footer/>
            </div>

   )
   }