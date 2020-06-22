import React from 'react'
import {Box, Button, Grid, Card} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import chart from '../../assets/currency.jpg'
import YouTube from 'react-youtube'
import Footer from '../Common/Footer'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
                    <h1 className={s.header}>Australian Currency</h1>
                    <p className={s.subheader}>featuring handgun & knife protection</p>
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
                <h3 style={{color:'white'}} className={s.subclass}>Classes</h3>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <div className={classes.demo}>
                    <List dense={dense}>
                        <ListItem>
                        <ListItemText
                            primary="$5 Note"
                            secondary="#1"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="$10 Note"
                            secondary="#2"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="$20 Note"
                            secondary="#3"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="$50 Note"
                            secondary="#4"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="$100 Note"
                            secondary="#5"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="Handgun"
                            secondary="#6"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="Knife"
                            secondary="#7"
                        />
                        </ListItem>
                    </List>
                </div>
                </Grid>
                <Grid item xs={12} md={6}>
                <div className={classes.demo}>
                <List dense={dense}>
                    <ListItem>
                        <ListItemText
                            primary="5c Coin"
                            secondary="#8"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="10c Coin"
                            secondary="#9"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="20c Coin"
                            secondary="#10"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="50c Coin"
                            secondary="#11"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="$1 Coin"
                            secondary="#12"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="$2 Coin"
                            secondary="#13"
                        />
                        </ListItem>
                    </List>
                    </div>
                </Grid>
                <Spacer height="50px"/>

            </Grid>
         </Grid>
         </Grid>
         </Box>
         <Box>
             <Spacer height="50px"/>
            <Grid container alignItems="top" justify="center">
                <Grid item md={6} sm={6} xs={12}>
                <h3 className={s.subclass}>Demo Video</h3>
                    <Box p={4}>
                    <Spacer height="20px"/>
                <YouTube videoId="7UTpr-jPH0A" />
                </Box>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        <Footer />
    </div>
    )
}