import React from 'react';
import styled from 'styled-components';
import {Box, Button, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import PieChartIcon from '@material-ui/icons/PieChart';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    paper: {
        height: 225,
        width: 250,
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  export default function Hero() {
    const [spacing] = React.useState(2);
    const classes = useStyles();
   
    const BoxHeading = styled.h3`
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 5px;
    
    `
    const Notes = styled.p`
    text-align: center;
    font-size: 1.3em;
    margin: 0px 0px 5px 0px;
    `
   return (
    <Box p={2} style={{backgroundColor: 'rgb(37, 51, 55)'}} color="primary.contrastText" >
         <Grid container justify="center" spacing={spacing}>
         <Grid item md={10} xs={12}>
            <Spacer height="40px"/>
            <h2 className={s.header} style={{textAlign: 'left'}}>
            Real-time results
            </h2>
            <Spacer height="40px"/>
            </Grid> 
          
            <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            
            <Grid item>
                <Paper className={`${classes.paper}`} >
                <MovieIcon color="primary"  fontSize="large"/>
                <hr/>
                <BoxHeading>Live inference feed</BoxHeading>
                <br/>
                <Notes>Real-time video inference feed from your model </Notes>
               
                </Paper>
            </Grid>
            <Grid item>
                <Paper  className={`${classes.paper}`} >
                <NotificationsActiveIcon color="primary" fontSize="large"/>
                <hr/>
                <BoxHeading>Detection alets</BoxHeading>
                <br/>
                <Notes>Set up notifications to Slack, SMS, email, or Push</Notes>

                </Paper>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper}`} >
                <PieChartIcon color="primary" fontSize="large"/>
                <hr/>
              <BoxHeading>Dynamic Charts</BoxHeading>
              <br/>
              <Notes>Inference results are charted in real time</Notes>

              </Paper>
            </Grid>
            <Grid item>
                <Paper className={`${classes.paper}`} >
                <DynamicFeedIcon color="primary" fontSize="large"/>
                <hr/>
                <BoxHeading>JSON Output</BoxHeading>
                <br/>
                <Notes>Get data out in JSON or streaming JSON</Notes>

                </Paper>
            </Grid>
            </Grid> 
            <Spacer height="80px"/>
            <Hidden xsDown>
                    <Button size="large" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Get Started Now</span>
                    </Button>
                    </Hidden>
                    <Hidden smUp>
                    <Button size="small" variant="contained" color="secondary" href="/auth">
                    <span className={s.ctabutton}>Get Started Now</span>
                    </Button>
                    </Hidden>
            <Spacer height="80px"/>
            
        </Grid> 
        
        </Grid>
       
    </Box>

)
}
