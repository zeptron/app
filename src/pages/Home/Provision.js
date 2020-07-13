import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import Provision from '../../assets/provision.png'



  export default function Hero() {
    const [spacing] = React.useState(2);
 
   return (

          <Box p={2} >
          <Grid container justify="center" spacing={spacing}>
            <Grid item md={9} sm={10} xs={12}>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
            <Spacer height="40px"/>
              <h2 className={s.header} style={{textAlign: 'left'}}>
              Manage model instances and run time easily
              </h2>
               <p className={s.subheader} style={{textAlign: 'left'}}>Automatically provision cloud resources based on your model's requirements</p>
              <Spacer height="40px"/>
            </Grid> 
            <Grid item md={6} xs={12}>
            <img alt="provision AI models" style={{maxWidth: '100%'}} src={Provision} />
            </Grid>
            </Grid>
            <Spacer height="80px"/>
            </Grid>
            </Grid>
            </Box>
         
     )
    }

    
    

