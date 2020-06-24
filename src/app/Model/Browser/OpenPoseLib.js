import React, {useState} from 'react'
import {Box,  Grid} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../../styles/styles.module.css'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import PoseNet from "react-posenet"


export default function OpenPoseLib() {
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
         
    </div>
    )
}