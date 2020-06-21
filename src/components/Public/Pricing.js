import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      height: 350,
      width: 250,
      padding: theme.spacing(1),
      textAlign: 'center',  
      backgroundColor: '#ffb04c'

    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  export default function Hero() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const Price = styled.p`
    color: #bb5000;
    text-align: center;
    font-size: 6em;
    margin: 0;
    `
    const BoxHeading = styled.h3`
    text-transform: uppercase;
    text-align: center;
    margin: 25px 0px;
    `
    const Notes = styled.p`
    text-align: left;
    margin: 0px 0px 10px 0px;
    `
   return (
       <div>
        <Box p={2}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item md={8} sm={10} xs={12}>
            <Grid container justify="center" spacing={spacing}>
            <Grid item xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'center'}}>
              Pricing
              </h2>
              <p className={s.subheader}>Simple pay-as-you-go pricing. No lock-in contract</p>
              <Spacer height="40px"/>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper}`} >
              <Price>$0</Price>
              
              <Spacer height="25px"/>
              <BoxHeading>5 hours / month </BoxHeading>
              <Spacer height="25px"/>
              <Button href="/auth" variant="contained" color="primary" size="large">
                  <span className={s.ctabutton}>Start</span>
              </Button>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper}`} >
              <Price>$5</Price>
              
              <Spacer height="25px"/>
              <BoxHeading>per hour </BoxHeading>
              <Spacer height="25px"/>
              <Button href="/auth" variant="contained" color="primary" size="large">
                  <span className={s.ctabutton}>Start</span>
              </Button>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper}`} >
              <Price>$49</Price>
              
              <Spacer height="12px"/>
              <BoxHeading>per month <br/>+ $1 / hour </BoxHeading>
              <Spacer height="12px"/>
              <Button href="/auth" variant="contained" color="primary" size="large">
                  <span className={s.ctabutton}>Start</span>
              </Button>
              </Paper>
            </Grid>
            </Grid>
            <Spacer height="100px"/>
            </Grid>
            </Grid>
        </Box>
       </div>

)
}
