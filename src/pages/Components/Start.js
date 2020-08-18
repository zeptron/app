import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { css } from "glamor";
import Bg from '../../assets/startbg.jpg'

  export default function Start(props) {
 
    const [spacing] = React.useState(2);
   
   return (
    <Box id="start" style={{backgroundImage: `url('${Bg}')`}} p={4} color="primary.contrastText" {...css(styles.container)}   >
         <div {...css(styles.coverOpacity)}></div>
         <Grid container justify="center" spacing={spacing} {...css(styles.content)}>
            <Grid item md={8} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container alignItems="top" justify="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
            <Spacer height="50px"/>
            <h2 className={`${s.header} `}>
              {props.header || 'See how Zeptron can help you today'}
            </h2>
            <p className={`${s.subheader} `}>
              {props.subheader || 'Schedule a free demo with us'}
            </p>
            <Spacer height="20px"/>
            <p className={`${s.subheader} `}>
              <ul style={{textAlign: 'left', margin: 2}}>
              <li>
                  State of the art algorithms
                </li>
                <li>
                  Instant plug & play deployment
                </li>
                <li>
                  Secure encrypted data transfer
                </li>
              </ul>
            </p>
            <Spacer height="50px"/>
            </Grid> 
            <Grid item md={6} xs={12}>
            <Spacer height="20px"/>
            {props.form}
            <Spacer height="16px"/>
            </Grid>
            </Grid> 
            
        </Grid> 
        </Grid>
    </Box>

)
}
const styles = {
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
}