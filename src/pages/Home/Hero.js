import React from 'react';
import { css } from "glamor";
import {Box, Button, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'



  export default function Hero() {


    console.log(`require("./../../assets/herobg.mp4")`, require("./../../assets/herobg.mp4"))
  

   return (
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4} {...css(styles.container)}>
           <video loop autoPlay {...css(styles.vidDiv)}>
            <source src={require("./../../assets/vision.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video> 
       <div {...css(styles.coverOpacity)}></div>
       <Spacer height="200px"/>
       <Hidden smUp >
       <Spacer height="50px"/>
       </Hidden>
        <Grid container alignItems="center" justify="center" {...css(styles.content)}>
            <Grid item lg={5} md={5} sm={6} xs={10}>
                   <h1  className={`${s.header} ${s.center}`} >
                    Deploy AI<br/>in 60 seconds
                    </h1>
                    <p className={`${s.subheader} ${s.center}`} >
                    Zeptron makes deploying and managing computer vision software easy
                    </p>
                    <Spacer height="25px"/>
                    <Hidden xsDown >
                    <div style={{textAlign: 'center'}}>
                    <Button size="large" variant="contained" color="secondary" href="#start">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </div>
                    </Hidden>
                    <Hidden smUp>
                    <Button size="small" variant="contained" color="secondary" href="#start">
                    <span className={s.ctabutton}>Start Now</span>
                    </Button>
                    </Hidden>
            </Grid>
        </Grid>
      <Spacer height="100px"/>
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
    backgroundImage: 'url(https://zepappassets.s3-ap-southeast-2.amazonaws.com/bg.jpg)',
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
