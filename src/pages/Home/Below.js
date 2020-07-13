import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Provision from '../../assets/provision.png'



  export default function Hero() {
    const [spacing] = React.useState(2);
 
   return (

          <Box p={2} style={{backgroundColor: '#253337', color: 'white'}} >
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={9} sm={10} xs={12}>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={8} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Our mission
              </h2>
               <p className={s.subheader} style={{textAlign: 'left'}}>Zeptron makes it easy for anyone to use computer vision without requiring technical skills.</p>
               <p className={s.subheader} style={{textAlign: 'left'}}>Our platform is a business tool that makes the world better and more efficient for professionals of all kinds.</p>
               <p className={s.subheader} style={{textAlign: 'left'}}>We support the open and safe use of AI as a tool for the betterment of humankind.</p>
              <Spacer height="40px"/>
            </Grid> 
            
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

