import React from 'react';
import { css } from "glamor";
import {Box, Button, Grid, Hidden, TextField} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Ai from './animations/ai'
import Image from '../../assets/bg4.jpg'


  export default function Hero(props) {


    console.log(`require("./../../assets/herobg.mp4")`, 
    require("./../../assets/herobg.mp4"))
  

   return (
      <Box style={{backgroundImage: `${props.bgImage}`}} bgcolor="primary.dark" color="primary.contrastText" p={4} {...css(styles.container)}>
    {/*  <video loop autoPlay {...css(styles.vidDiv)}>
            <source src={require("./../../assets/vision.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
       <div {...css(styles.coverOpacity)}></div>
       <Spacer height="250px"/>
       
        <Grid container alignItems="center" justify="center" {...css(styles.content)}>
           
            <Grid item lg={5} md={5} sm={6} xs={10}>
                   <h1  className={`${s.header} ${s.center} `} >
                     {props.header}
                    </h1>
                    <p className={`${s.subheader} ${s.center}  `} >
                      {props.subheader}
                    </p>
                    <Spacer height="25px"/>
                    <Grid container alignItems="center" justify="center">
                    <div style={{textAlign: 'center', color: 'white'}}>
                    <TextField
                    label="Email"
                    id="filled-size-small"
                    variant="filled"
                    size="small"
                    style={{backgroundColor: 'white'}}
                  />
                    <Button style={{height: 48}} size="large" variant="contained" color="secondary" href="#start">
                    <span className={s.ctabutton}>Get a Demo</span>
                    </Button>
                    </div>
                    </Grid>
            </Grid>
            
        </Grid>
      <Spacer height="200px"/>
    </Box>  
  )
}

const styles = {
  vidDiv:{
    minHeight: "120%",
    minWidth: "100%",
    position: "absolute",
    left: 0,
    top: "-80px"
  },
  container: {
    overflow: "hidden",
    position: "relative",
    padding: "0px !important",
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  },
  content: {
    position: "relative",
    padding: "32px 0px"
  },
  coverOpacity: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgb(0, 10, 18)",
    opacity: 0.7
  }
};
