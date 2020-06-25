import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid, Paper, Card} from '@material-ui/core'
import s from '../../../styles/styles.module.css'
import { Link } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddIcon from '@material-ui/icons/Add';
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

  // Data from GraphQL

  const InstanceName = "InstanceName"


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
                {InstanceName}                
                </h1>
            </Box>

            <Box>
                <Spacer height="100px"/>
                <Grid container alignItems="center" justify="center">
                  <Grid item md={8}>
                 
                  <Button href="/studio/{id}/" variant="contained" color="primary" size="large">
                      Video
                  </Button>
                  <Button variant="contained" color="secondary" size="large">
                      Stop
                  </Button>
                  <Spacer height="50px"/>
                  <h2>Charts</h2>
                  <Grid container alignItems="center" justify="center" spacing={2}>
                    <img src="https://via.placeholder.com/640x460.png?text=Live+Stream" />
                    </Grid>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            </Box>
            </div>

   )
   }