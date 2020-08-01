import React from 'react';
import {Box, Grid, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Image from '../../assets/cctv.jpg'
import YouTube from 'react-youtube'
import ReactPlayer from 'react-player'

  export default function Hero() {
    const [spacing] = React.useState(2);
   
    
   return (

          <Box p={2} style={{backgroundColor: '#e0e4e0'}}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="80px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Hidden xsDown>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header}>
              Automated computer vision deployment
              </h2>
              <p className={s.subheader} >
              Put AI to work for analytics, optical sorting, and quality control in under a minute with an automated deployment solution
               </p>  
              <Spacer height="60px"/>
            </Grid> 
            </Hidden>
            <Grid item md={6} xs={12}>
            {/* <ReactPlayer 
                pip="true" 
                muted 
                width="100%" 
                playing="true" 
                url='https://vimeo.com/441931886' 
            /> */}
            <img src="https://i.ytimg.com/vi/cXKTnOvTvcE/maxresdefault.jpg" style={{maxWidth: '100%'}}/>
            </Grid> 
            <Hidden smUp>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Automated computer vision deployment
              </h2>
              <p className={s.subheader} >
              Put AI to work for analytics, optical sorting, and quality control in less time and with less work
               </p>  
              <Spacer height="60px"/>
            </Grid> 
            </Hidden>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

