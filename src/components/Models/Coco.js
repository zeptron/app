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
import Coco from '../../assets/coco.gif'

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
                    <h1 className={s.header}>COCO</h1>
                    <p className={s.subheader}>80 classes of everyday objects</p>
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
                <Grid item md={8} sm={12} xs={12}>
                <Spacer height="50px"/>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={6} sm={12} xs={12}>
                        <img src={Coco} style={{maxWidth: '100%'}}/>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
         </Box>
         
        <Footer />
    </div>
    )
}