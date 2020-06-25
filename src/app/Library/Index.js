import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid, Paper} from '@material-ui/core'
import s from '../../styles/styles.module.css'
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
                Model Library                
                </h1>
               
                    <Grid container alignItems="center" justify="center">
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Box>
                
                <Spacer height="100px"/>
                <Grid container alignItems="center" justify="center">
                  <Grid item md={8}>
                  <Grid container alignItems="center" justify="center" spacing={2}>
                  <Grid item md={6} xs={12}>
                      <Link to="/library/openpose">
                      <Spacer height="20px"/>
                      <h2 className={s.librarytitle}>OpenPose - LIVE</h2>
                        <Paper className={`${classes.paper} ${s.openpose}`}/>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Link to="/library/currency">
                        <Spacer height="20px"/>
                      <h2 className={s.librarytitle}>Australian Currency</h2>
                        <Paper className={`${classes.paper} ${s.money}`}/>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Link to="/library/coco">
                      <Spacer height="20px"/>
                      <h2 className={s.librarytitle}>COCO</h2>
                        <Paper className={`${classes.paper} ${s.coco}`}/>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Link to="/library/ripeness">
                      <Spacer height="20px"/>
                      <h2 className={s.librarytitle}>Tomato Ripeness</h2>
                        <Paper className={`${classes.paper} ${s.ripeness}`}/>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Link to="/library/deepface">
                        <Spacer height="20px"/>
                      <h2 className={s.librarytitle}>Facial Recognition</h2>
                        <Paper className={`${classes.paper} ${s.faces}`}/>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Link to="/library/openalpr">
                      <Spacer height="20px"/>
                      <h2 className={s.librarytitle}>OpenALPR</h2>
                        <Paper className={`${classes.paper} ${s.license}`}/>
                        </Link>
                    </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            
            </div>

   )
   }