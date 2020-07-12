import React from 'react';
import { css } from "glamor";
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'



  export default function Hero() {

    console.log(`require("./../../assets/herobg.mp4")`, require("./../../assets/herobg.mp4"))
  
   return (
      
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4} {...css(styles.container)}>
          <video loop autoPlay {...css(styles.vidDiv)}>
            <source src={require("./../../assets/herobg.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
       <div {...css(styles.coverOpacity)}></div>
        <Grid container alignItems="center" justify="center" {...css(styles.content)}>
            <Grid item md={10} xs={10} style={{textAlign: 'left', "paddingTop": "80px"}}>
                   <h1  className={s.header} style={{textAlign: 'left'}}>
                    Artificial intelligence at your fingertips
                    </h1>
                    <p className={s.subheader} style={{textAlign: 'left'}}>
                      Provision, configure and run complicated models without touching a single line of code
                    </p>
                    <Spacer height="40px"/>
                    <Button size="large" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Get Started Now</span>
                    </Button>
            </Grid>
        </Grid>
      <Spacer height="60px"/>
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
    padding: "0px !important"
  },
  content: {
    position: "relative",
    padding: "32px 0px"
  },
  coverOpacity: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.7
  }
};