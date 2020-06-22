import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from './styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import Footer from './components/Common/Footer'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
      width: 200,
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(4),
    },
  }));


  export default function About() {
    const [spacing, setSpacing] = React.useState(8);
    const classes = useStyles();
    const Text = styled.p`
    color: white;
    text-align: left;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    `
    const BoxHeading = styled.h3`
    text-transform: uppercase;
    `
   return (
        <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <Spacer height="10px"/>
                <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                    <h1  className={s.header} style={{textAlign: 'center'}}>
                        We put AI in the hands of people who need it without requiring technical skills
                    </h1>
                    </Grid>
                    </Grid>

            <Spacer height="30px"/>
            <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                   <p style={{color: 'white'}} className={s.subheader}>Zeptron provides you with a user-friendly platform for working with AI models as well as a library of pre-trained 'frozen' models.</p>

                   </Grid>
               </Grid>

            <Spacer height="60px"/>
           
            <Box>
            <Grid container justify="center"    >
                <Grid item xs={12}>
                <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Start Now for FREE</span>
              </Button>
              </Grid>
              </Grid>
              <Spacer height="80px"/>
              </Box>
            </Box>
            <Box p={2}>

            <Grid container justify="center" spacing={spacing}>
              <Grid item md={8} sm={10} xs={12}>
              <Grid container justify="center" spacing={spacing}>
              <Grid item xs={12}>
              <Spacer height="40px"/>
                <h2 className={s.header} style={{textAlign: 'center'}}>
                Why do we exist?
                </h2>
                <p className={s.subheader}>As innovation around AI has accelerated, the market for artificial intelligence models has become increasingly fractured. </p>
                <p className={s.subheader}>You can find models in all shapes, sizes, and languages, which makes it challenging for developers to use let alone people with no technical skills.</p>
                <p className={s.subheader}>All AI models, even ones you can build using AWS, IBM, and Microsoft, require you to collect training data, train them, and be familiar with code. </p>
                <p className={s.subheader}>No longer! We believe in a world where AI is open and accessible to everyone, even if you don't have technical skills. </p>
                <p className={s.subheader}>Zeptron freezes platform configuration along with the model graph itself so that when you choose your model from the library, the platform changes shape and adapts to the model.</p>
                </Grid>
            
              </Grid>
            
                  <Spacer height="80px"/>
                <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Get Started</span>
                </Button>
                <Spacer height="80px"/>
  
              </Grid>
              </Grid>
              </Box>
              <Footer />
              </div>
            
         
     )
    }

    
    

