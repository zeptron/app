import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import Container from '../../Container'


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
    //   <Container>
            <Box p={2}>
          
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={8} sm={10} xs={12}>
            <Grid container justify="center" spacing={spacing}>
            <Grid item xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'center'}}>
              Select your AI brain from the library
              </h2>
              <p className={s.subheader}>Start now with no technical skills, training or setup required. Or, integrate the model into your own app using our API and JSON feeds</p>
              <Spacer height="40px"/>
              <h3 className={s.subclass}>Featured models</h3>
              </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.money}`} />
              <BoxHeading>Australian Currency</BoxHeading>
              <Notes>13 Classes · 99% mAP · 30FPS</Notes>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.openpose}`} />
              <BoxHeading>OpenPose</BoxHeading>
              <Notes>130 human body part keypoints</Notes>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.faces}`} />
              <BoxHeading>Facial Recognition</BoxHeading>
              <Notes>Lookup, analysis & tagging</Notes>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.satellite}`} />
              <BoxHeading>Satellite Feed</BoxHeading>
             
              <Notes>42 Classes · 98% mAP · 30FPS</Notes>
            </Grid>
           
            <Grid item>
              <Paper className={`${classes.paper} ${s.license}`} />
              <BoxHeading>License Plate Reader</BoxHeading>
              <Notes>OCR · 99% mAP · 30FPS</Notes>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.coco}`} />
              <BoxHeading>COCO Everyday Objects</BoxHeading>
              <Notes>80 Classes · 99% mAP · 30FPS</Notes>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.ripeness}`} />
              <BoxHeading>Apple Ripeness</BoxHeading>
              <Notes>96% mAP · 30FPS · Transfer learning</Notes>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.safety}`} />
              <BoxHeading>Site Safety Violations</BoxHeading>
              <Notes>23 Classes · 30FPS</Notes>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper} ${s.yours}`} />
              <BoxHeading>Your model</BoxHeading>
              <Notes>Get your own model trained</Notes>
            </Grid>
            </Grid>
          
                <Spacer height="80px"/>
              <Button size="large" variant="contained" color="secondary" href="/auth">
              <span className={s.ctabutton}>Get Started</span>
              </Button>
              <Spacer height="80px"/>

            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

