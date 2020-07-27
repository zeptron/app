import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
// import { IoLogoGoogle } from "react-icons/io";
// import {MdEmail} from "react-icons/md"
import { Auth } from 'aws-amplify'
import Form from './Form'
// import { Button } from "../../containers/Auth.style";


  export default function Start() {
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
            Available now
            </h2>
           
            <p className={`${s.subheader} ${s.center}`}>Try a demo today</p>
            </Grid> 
            </Grid> 
            <Spacer height="20px"/>
            <Form/>
            <Spacer height="80px"/>

            <Grid container alignItems="center" justify="center">
                <Grid item md={4} sm={8} xs={12}>
                  {/* <Button href="/contact" variant="contained" size="large" color="secondary">
                <strong>Get In Touch</strong>
                  </Button> */}
        {/* <Button
          fullwidth
          title={'Start with Google'}
          className='google'
          icon={<IoLogoGoogle />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueGoogleBtn'
          onClick={thisGoogle}
          style={{ color: '#fff' }}
        /> */}
         {/* <Button
          fullwidth
          title={'Get In Touch'}
          className='email'
          icon={< MdEmail/>}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueFacebookBtn'
          style={{ color: '#fff' }}
          onClick={event =>  window.location.href='/contact'}
        /> */}
        </Grid> 
            </Grid>
            <Spacer height="80px"/>
        </Grid> 
        </Grid>
    </Box>

)
}
