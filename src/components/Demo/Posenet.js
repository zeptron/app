import React, {useState} from 'react'
import {Box, Button, Grid, Card} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import Footer from '../Common/Footer'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PoseNet from "react-posenet"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

  
export default function Currency() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [posesString, setPosesString] = useState([])
    return ( 
    <div>
        <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={5} readOnly />
                </Box>
                    <h1 className={s.header}>OPENPOSE</h1>
                    <p className={s.subheader}>130 human body part keypoints</p>
                    <Spacer height="25px"/>
                    
              <Spacer height="25px"/>
                </Grid>
            </Grid>
            <Spacer height="25px"/>
        </Box>
        
        <Box bgcolor="primary.light">
        <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
            <Spacer height="50px"/>
                <Grid item md={6} sm={12} xs={12}>
                <PoseNet inferenceConfig={{ decodingMethod: "single-person" }}
    onEstimate={poses => {
      setPosesString(JSON.stringify(poses))
    }} />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
            <p>{posesString}</p>
            </Grid>
         </Grid>
         <Spacer height="50px"/>
         </Box>
         
        <Footer />
    </div>
    )
}