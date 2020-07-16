import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import StorageIcon from '@material-ui/icons/Storage';

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
    const [spacing] = React.useState(2);
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
  
   return (
       <div>
        <Box p={2}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item md={8} sm={12} xs={12}>
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
              <Price>$5</Price>
              
              <Spacer height="25px"/>
              <BoxHeading>per hour </BoxHeading>
              <Spacer height="25px"/>
              <Hidden xsDown>
                    <Button size="large" variant="contained" color="primary" href="/auth">
                    <span className={s.ctabutton}>Start</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <Button size="small" variant="contained" color="primary" href="/auth">
                    <span className={s.ctabutton}>Start</span>
                    </Button>
                    </Hidden>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper}`} >
              <Price>$59</Price>
              
              <Spacer height="12px"/>
              <BoxHeading>per month <br/>per camera</BoxHeading>
              <Spacer height="12px"/>
              <Hidden xsDown>
                    <Button size="large" variant="contained" color="primary" href="/auth">
                    <span className={s.ctabutton}>Start</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <Button size="small" variant="contained" color="primary" href="/auth">
                    <span className={s.ctabutton}>Start</span>
                    </Button>
                    </Hidden>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper}`} >
              <Price><StorageIcon style={{fontSize: '66px'}}/></Price>
              
              <Spacer height="12px"/>
              <BoxHeading>use your own AWS resources</BoxHeading>
              <Spacer height="12px"/>
              <Hidden xsDown>
                    <Button size="large" variant="contained" color="primary" href="/contact">
                    <span className={s.ctabutton}>Enquire</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <Button size="small" variant="contained" color="primary" href="/contact">
                    <span className={s.ctabutton}>Enquire</span>
                    </Button>
                    </Hidden>
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
