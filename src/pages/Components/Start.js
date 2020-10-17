import React from 'react';
import {Box, Grid, Button} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { css } from "glamor";
import Bg from '../../assets/heroapp.png'
import Form from './Form'
  export default function Start(props) {
    
 
    const [spacing] = React.useState(2);
   
   return (
    <Box id="start" p={4} {...css(styles.container)} height="100vh" bgcolor="primary.main" color="primary.contrastText" >
       <Spacer height="200px"/>
         <Grid container justify="center" spacing={spacing} {...css(styles.content)}>
            <Grid item md={8} sm={10} xs={12}>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
            <Spacer height="20px"/>
            <h2 className={`${s.header} `}>
              {props.header || 'Zeptron is a secure AI deployment solution for any CCTV network'}
            </h2>
            <Spacer height="20px"/>
            <div style={{textAlign: 'left'}}>
            <Button variant="contained" size="large" color="secondary" href="/login">
            <strong> Sign Up</strong>
              </Button>
              {/* <Button variant="outlined" size="large" color="secondary" style={{marginLeft: 5}}>
                <strong>Get a demo</strong>
              </Button> */}
              </div>
            </Grid> 
            <Grid item md={6} xs={12}>
             <img src={Bg} style={{maxWidth: '100%'}}/>
              {/* <Form 
              button={props.button || 'Go'}
              /> */}
              
            </Grid>
            </Grid> 
        </Grid> 
        </Grid>
        <Spacer height="200px"/>
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
  backgroundColor: "#e2dbce",
  opacity: 0.7
}

}