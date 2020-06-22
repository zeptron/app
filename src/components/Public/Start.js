import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import { IoLogoGoogle } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Auth } from 'aws-amplify'
import { Button } from "../../containers/Auth.style";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
        height: 250,
        width: 250,
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  export default function Start() {
    const thisGoogle = () => {
        Auth.federatedSignIn({ provider: "Google" });
      };
    // const thisFacebook = () => {
    //     Auth.federatedSignIn({ provider: "Facebook" });
    //   };
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
   
   return (
    <Box p={2} bgcolor="primary.dark" color="primary.contrastText" >
         <Grid container justify="center" spacing={spacing}>
            <Grid item md={8} sm={10} xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item xs={12}>
            <Spacer height="40px"/>
            <h2 className={s.header} style={{textAlign: 'center'}}>
            Start browsing AI models
            </h2>
            <p className={s.subheader}>Sign up now for FREE and start browsing models.<br/> No credit card required!</p>
           
            </Grid> 
            
            </Grid> 
            <Grid container alignItems="center" justify="center">
                <Grid item md={4} sm={8} xs={12}>
        <Button
          fullwidth
          title={'Sign up with Google'}
          className='google'
          icon={<IoLogoGoogle />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueGoogleBtn'
          onClick={thisGoogle}
          style={{ color: '#fff' }}
        />
         <Button
          fullwidth
          title={'Sign up with Email'}
          className='email'
          icon={< MdEmail/>}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueFacebookBtn'
          style={{ color: '#fff' }}
          onClick={event =>  window.location.href='/auth'}
        />
        </Grid> 
            </Grid>
            <Spacer height="80px"/>
        </Grid> 
        </Grid>
    </Box>

)
}
