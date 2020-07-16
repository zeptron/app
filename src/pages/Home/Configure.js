import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Touch from '../../assets/touch.png'
import Hidden from '@material-ui/core/Hidden';


  export default function Hero() {
    const [spacing] = React.useState(2);
   
    
   return (

          <Box p={2} style={{backgroundColor: '#e0e4e0'}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={109} sm={10} xs={12}>
            <Spacer height="40px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
             <Hidden smDown>
            <Grid item md={5} xs={12}>
              <img style={{maxWidth: '100%'}} src={Touch}/>
              </Grid>
              </Hidden>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Set up tracking and notifications
              </h2>
              <p className={s.subheader} style={{textAlign: 'left'}}>Live video analysis with up to 99% accuracy</p>
               <p className={s.subheader} style={{textAlign: 'left'}}>Configure tracking, multi-directional counting, and detection alerts through SMS or Slack</p>
              <Spacer height="20px"/>
              <Spacer height="40px"/>
            </Grid> 
            <Hidden mdUp>
            <Grid item md={6} xs={12}>
              <img style={{maxWidth: '100%'}} src={Touch}/>
              </Grid>
              </Hidden>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

