import React from 'react';
import { css } from "glamor";
import {Box, Button, Grid, Hidden, TextField} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import AWS from 'aws-sdk';
import useInput from '../../utils/hooks/useInput';

  export default function Hero(props) {


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
          <Spacer height="250px"/>
              <Grid container alignItems="center" justify="center" {...css(styles.content)}>
                <Grid item xs={10}>
                    <Grid item lg={4} md={6} sm={10} xs={12}>
                   <h1  className={`${s.header}  `} >
                     {props.header}
                    </h1>
                    
                    <p className={`${s.subheader}`} >
                      {props.subheader}
                    </p>
                 
                    <Spacer height="25px"/>
                  </Grid>
                  <div style={{textAlign: 'left'}}>
                  {/* <Button size="medium" variant="contained" color="secondary">
                    Sign up
                  </Button> */}
                  <Button size="large" variant="contained" color="secondary" to="/login">
                    <strong>Learn More</strong>
                  </Button>
                  </div>
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
