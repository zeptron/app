import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { css } from "glamor";
import Bg from '../../assets/heroapp.png'
import Form from './Form'
import G from '../../assets/google.svg'
import { Auth } from "aws-amplify";
import { Button } from "../../containers/Auth.style";


  export default function Start(props) {
    const thisGoogle = () => {
      Auth.federatedSignIn({ provider: "Google" });
    };

 
    const [spacing] = React.useState(2);
   
   return (
    <Box id="start" p={4} {...css(styles.container)} height="100vh" bgcolor="primary.main" color="primary.contrastText" >
       <Spacer height="200px"/>
         <Grid container justify="center" spacing={spacing} {...css(styles.content)}>
            <Grid item md={10} sm={10} xs={12}>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={8} xs={12}>
            <Spacer height="20px"/>
            <h2 className={`${s.header} ${s.center}`}>
              {props.header || 'Zeptron is a secure AI deployment solution for any CCTV network'}
            </h2>
            <Spacer height="20px"/>
            <Grid container justify="center" spacing={spacing}>

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
            </Grid> 
            {/* <Grid item md={6} xs={12}>
            
              
            </Grid> */}
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