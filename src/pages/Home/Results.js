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
    margin: 0px 0px 5px 0px;
    `
   return (
    <Box p={2} style={{backgroundColor: 'rgb(37, 51, 55)'}} color="primary.contrastText" >
         <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid item xs={12}>
            <Spacer height="40px"/>
            <h2 className={s.header} style={{textAlign: 'left'}}>
            Receive results in real time on any device
            </h2>
            <p className={s.subheader} style={{textAlign: 'left'}}>Get live streaming inference feeds, charts, and notifications through our user-friendly app</p>
            <Spacer height="40px"/>
            </Grid> 
            <Grid item>
                <Paper className={`${classes.paper}`} >
                <FormatListNumberedIcon color="primary"  fontSize="large"/>
                <hr/>
                <BoxHeading>Built-in quick actions</BoxHeading>
                <br/>
                <Notes>State of the art counting and tracking algorithms can be configured with a single tap while setting up your model</Notes>
               
                </Paper>
            </Grid>
            <Grid item>
                <Paper  className={`${classes.paper}`} >
                <NotificationsActiveIcon color="primary" fontSize="large"/>
                <hr/>
                <BoxHeading>Custom notifications</BoxHeading>
                <br/>
                <Notes>Set up notifications for when a tracked object appears in the frame, or when a tagged object appears in the feed</Notes>

                </Paper>
            </Grid>
            <Grid item>
              <Paper className={`${classes.paper}`} >
                <PieChartIcon color="primary" fontSize="large"/>
                <hr/>
              <BoxHeading>Analytics Dashboard</BoxHeading>
              <br/>
              <Notes>FREE unlimited access to our analytics dashboard for as long as you'd like. Each model is different, so our dashboard adapts to the characteristics of each model</Notes>

              </Paper>
            </Grid>
            <Grid item>
                <Paper className={`${classes.paper}`} >
                <DynamicFeedIcon color="primary" fontSize="large"/>
                <hr/>
                <BoxHeading>JSON & CSV Data Feeds</BoxHeading>
                <br/>
                <Notes>Export your data to JSON and CSV so that you can manipulate it and import it into other programs or save it for your records</Notes>

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
