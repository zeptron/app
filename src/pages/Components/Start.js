import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
// import { IoLogoGoogle } from "react-icons/io";
// import {MdEmail} from "react-icons/md"
//import { Auth } from 'aws-amplify'
import Hubspot from './Hubspot'
//import Form from './Form'
// import { Button } from "../../containers/Auth.style";


  export default function Start(props) {
    // const thisGoogle = () => {
    //     Auth.federatedSignIn({ provider: "Google" });
    //   };
   
    const [spacing] = React.useState(2);
   
   return (
    <Box id="start" p={2} bgcolor="cornsilk"  >
         <Grid container justify="center" spacing={spacing}>
            <Grid item md={8} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={8} xs={12}>
            <Spacer height="30px"/>
            <h2 className={`${s.header} ${s.center}`}>
              {props.header || 'Start now'}
            </h2>
            <p className={`${s.subheader} ${s.center}`}>
              {props.subheader || 'Try a free demo today'}
            </p>
            </Grid> 
            </Grid> 
            <Spacer height="20px"/>
            {props.form}
            <Spacer height="16px"/>
        </Grid> 
        </Grid>
    </Box>

)
}
