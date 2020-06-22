import React from 'react';
import styled from 'styled-components';
import { css } from 'glamor'
import {Box, Button, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Spacer from 'react-spacer'
import {Link} from 'react-router-dom'

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


  export default function Footer() {
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

    <Box bgcolor="primary.main" color="primary.contrastText" p={4} >
        <Spacer height="40px"/>
            <Grid container alignItems="center" justify="center">
            <Grid item md={8}>
                <Grid container alignItems="center" justify="center">
                    <Grid item xs={12}>
                    <Link to='/' {...css(styles.link)}>
                        <h2 style={{marginLeft: '0px'}} className={s.title}>Zeptron</h2>
                    </Link>
                    </Grid>
                    <Grid item xs={12}>
                    <Spacer height="40px"/>
                    <div {...css(styles.navContainer)}>
                    <Link to='/about' {...css(styles.link)}>
                        <p className={s.navItemF}>About</p>
                    </Link>
                    <Link to='/contact' {...css(styles.link)}>
                        <p className={s.navItemF}>Contact</p>
                     </Link>
                     <Link to='/privacy-legal' {...css(styles.link)}>
                        <p className={s.navItemF}>Privacy & Legal</p>
                     </Link>
                     <Link to='/terms-conditions' {...css(styles.link)}>
                        <p className={s.navItemF}>Terms & Conditions</p>
                     </Link>
                    </div>
                    <Spacer height="40px"/>
                    </Grid>
                   
                    <Grid item xs={12}>
                    © 2020, Zeptron
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        <Spacer height="40px"/>
    </Box>
   )
  }

  const styles = {
    amplifyLogo: {
      height: 30,
      marginLeft: 25,
      marginBottom: 5
    },
    navContainer: {
      display: 'inline-flex',
      flex: 1,
      marginTop: 6,
      fontSize: '12px'
    },
   
    link: {
      textDecoration: 'none',
      display: 'inline-flex',
    },
    
    container: {
      height: '80px',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#000a12',
      display: 'flex',
      
    }
  }