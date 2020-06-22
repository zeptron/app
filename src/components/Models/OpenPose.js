import React from 'react'
import {Box, Button, Grid, Card} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import Footer from '../Common/Footer'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Right from '../../assets/openposer.gif'
import Left from '../../assets/openposel.gif'
import Middle from '../../assets/openposem.png'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

export default function Currency() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return ( 
    <div>
        <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={5} readOnly />
                </Box>
                    <h1 className={s.header}>OPENPOSE</h1>
                    <p className={s.subheader}>130 human body part keypoints</p>
                    <Spacer height="25px"/>
                    <Button size="large" variant="contained" color="secondary" href="/auth">
                <span className={s.ctabutton}>Start with this model</span>
              </Button>
              <Spacer height="25px"/>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        
        <Box bgcolor="primary.light">
        <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
            <Spacer height="50px"/>
                <Grid item md={4} sm={12} xs={12}>
                    <img src={Left} style={{maxWidth: '100%'}}/>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                    <img src={Right} style={{maxWidth: '100%'}}/>
            </Grid>
         </Grid>
         <Spacer height="50px"/>
         </Box>
         
        <Footer />
    </div>
    )
}