import React from 'react';
import { css } from "glamor";
import {Box, Grid, Hidden, TextField} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import AWS from 'aws-sdk';
import useInput from '../../utils/hooks/useInput';
import G from '../../assets/google.svg'
import Browsers from '../../assets/browsers.png'
import { Auth } from "aws-amplify";
import UserContext from "../../UserContext";
import { Button } from "../../containers/Auth.style";

  export default function Hero(props) {

    const thisGoogle = () => {
      Auth.federatedSignIn({ provider: "Google" });
    };


    // console.log(`require("./../../assets/herobg.mp4")`, 
    // require("./../../assets/herobg.mp4"))
    
    const [userEmail, { setWrap: setUserEmail }] = useInput('');
    
    const sendForm = async () => {
      AWS.config.update({
          region: process.env.REACT_APP_AWS_REGION,
          accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        });
      const SNS = new AWS.SNS();
      const params = {
          Message: `Demo requested by: \n \n *Email:* ${userEmail}`, 
          TopicArn: process.env.REACT_APP_AWS_NOTIFICATION_ARN,
        };
        SNS.publish(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     
              console.log(data)
              const [userEmail] = ''
          
          ;           // successful response
        });
  }

   return (
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4} {...css(styles.container)}>
       {/* <div {...css(styles.coverOpacity)}></div> */}
          <Spacer height="100px"/>
              <Grid container alignItems="center" justify="center" {...css(styles.content)}>
                <Grid item xs={10}>
                <Grid container alignItems="center" justify="center">
                    <Grid item lg={6} md={6} sm={10} xs={12}>
                   <h1  className={`${s.header} ${s.center} `} >
                     Deploy AI on any CCTV video network in minutes
                    </h1>
                    <Spacer height="25px"/>
                    <Grid container alignItems="center" justify="center">
                    <Grid item md={6}>
                    <Button
                    fullwidth
                    title={<strong>Start now with Google</strong>}
                    className="google"
                    icon={<img src={G}/>}
                    iconPosition="left"
                    iconStyle={{ color: "#4285f4", marginRight: 5 }}
                    intlButtonId="continueGoogleBtn"
                    onClick={thisGoogle}
                    style={{ color: "rgb(0, 10, 18)" }}
                  />   
                  </Grid>   
                  </Grid>   
                  <Spacer height="25px"/>
                    {/* <p className={`${s.subheader} ${s.center}`} >
                      Deploy AI on live streaming video in seconds, not hours, using Zeptron's cloud-based AI app
                    </p>
                     */}
                  </Grid>
                  </Grid>
                  {/* <Button size="large" variant="contained" color="secondary" to="/login">
                    <strong>Learn More</strong>
                  </Button>
                */}
                  <img src={Browsers} style={{maxWidth: '100%'}}/>
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
