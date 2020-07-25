import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Spacer from 'react-spacer'


  export default function About() {
    const [spacing] = React.useState(4);
    
   
   return (
        <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <Spacer height="10px"/>
                <Grid container alignItems="center" justify="center">
                   <Grid item md={8} xs={12}>
                    <h1  className={`${s.header} ${s.center}`}>
                        Contact us
                    </h1>
                    </Grid>
                    </Grid>

            <Spacer height="30px"/>
            <Grid container alignItems="center" justify="center">
                   
               </Grid>

            <Spacer height="60px"/>
           
            </Box>
            <Box p={2}>
            <Spacer height="100px"/>
            <Grid container justify="center" spacing={spacing}>
              <Grid item md={8} sm={10} xs={12}>
              <Grid container justify="center" spacing={spacing}>
              
              {/* <Grid item md={6}>
                <h3 className={s.subheader} >Australia</h3>
                <p className={s.subheader}><a style={{color: 'black'}} href="mailto:sydney@zeptron.co">sydney@zeptron.co</a></p>
                <p className={s.subheader}>354 Darling Street <br/> Balmain, NSW<br/> 2158 Australia</p>

              </Grid>
               */}
              <Grid item md={6} >
                {/* <h3 className={s.subheader} >New Zealand</h3> */}
                <p className={s.subheader}>Drop the humans a letter</p>
                <p className={s.subheader}><a style={{color: 'black'}} href="mailto:hello@zeptron.co">hello@zeptron.co</a></p>
                <p className={s.subheader}>Level 4, 11 York Street<br/>Sydney, NSW 2000</p>

              </Grid>
              </Grid>
            
                  <Spacer height="80px"/>
                  <Spacer height="80px"/>
  
              </Grid>
              </Grid>
              </Box>
              </div>
            
         
     )
    }

    
    

