import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Touch from '../../assets/touch.png'
import Hidden from '@material-ui/core/Hidden';


  export default function Hero() {
    const [spacing] = React.useState(2);
   
    
   return (

          <Box p={2} style={{backgroundColor: "#e4c38f"}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="40px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
             <Hidden smDown>
            <Grid item md={6} xs={12}>
              <img style={{maxWidth: '100%'}} src={Touch}/>
              </Grid>
              </Hidden>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Set up model actions easily
              </h2>
               <p className={s.subheader} style={{textAlign: 'left'}}>Configure tracking, multi-directional counting, and smart detection alerts for your models</p>
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

    
    

