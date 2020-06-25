import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid, Paper, Card} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { Link } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddIcon from '@material-ui/icons/Add';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import green from '@material-ui/core/colors/green';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    palette: {
      tertiary: green[500],
    },
    card: {
      minWidth: 275,
      maxWidth: 325,  
      // minHeight: 325,
      // maxHeight: 375,
      margin: 4
    },
    media: {
      height: 140,
    },
    cardInner: {
      marginTop: '41%',
      marginBottom: '41%'
    },
    paper: {
      height: 350,
      width: '100%',
      padding: theme.spacing(2),
      textAlign: 'center'

    },
    control: {
      padding: theme.spacing(4),
    },
  }));


  export default function Library() {
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
                <h1  className={s.header} style={{textAlign: 'center'}}>
                Vision Studio                
                </h1>
                
                </Box>
                <Box>
                <Spacer height="50px"/>
                <Grid item>
                 
                  </Grid>
                  <Spacer height="50px"/>
                <Grid container alignItems="center" justify="center">
                  <Grid item md={8}>
                  <Grid container alignItems="center" justify="center" spacing={2}>
                
                  
                  <Card className={classes.card}>
                  <CardContent className={classes.cardInner}>
                  <AddIcon style={{ fontSize: 50 }}/>
                  </CardContent>
                  </Card>
                 
                  {/* <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.exchangerates.org.uk/uploads/australian-dollar-forecast-1.png"
          title="Cash Counting"
        />
        <CardContent>
          <span>If model is stopped, this should be red</span> 
          <FiberManualRecordIcon style={{color: '#33eb91'}} />
          <Typography gutterBottom variant="h5" component="h2">
            Cash Counting
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Balmain, NSW · Basil & Thyme<br/>
            1 Camera
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="secondary">
          <span className={s.ctabutton}>Stop</span>
        </Button>
        <Button size="large" color="primary">
        <span className={s.ctabutton}>View</span>
        </Button>
      </CardActions>
    </Card> */}
                  <Spacer height="25px"/>
                  
               
                    </Grid>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            </Box>
            </div>

   )
   }