import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { Link } from "react-router-dom";

  export default function Hero() {
    const [spacing] = React.useState(4);
 
   return (

          <Box p={2} style={{backgroundColor: '#253337', color: 'white'}} >
          <Grid container justify="center">
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="50px"/>
            <h2 className={`${s.header} ${s.center}`} >
              With products for...
              </h2>
            <Spacer height="50px"/>
              <Grid container  justify="center" spacing={spacing}>
              <Grid item md={4} sm={6}  xs={12}>
                <Link to="/health" className={s.belowlink}>
              <Spacer height="20px"/>
              <img style={{maxWidth: '30%'}} src="https://image.flaticon.com/icons/svg/2904/2904376.svg"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Health</h3>
              </Link>
              </Grid>
              <Grid item md={4} sm={6}  xs={12}>
              <Link to="/safety" className={s.belowlink}>
              <Spacer height="20px"/>
              <img style={{maxWidth: '30%'}} src="https://image.flaticon.com/icons/svg/1605/1605056.svg"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Safety</h3>
              </Link>
              </Grid>
              <Grid item md={4} sm={6}  xs={12}>
              <Link to="/safety" className={s.belowlink}>
              <Spacer height="20px"/>
              <img style={{maxWidth: '30%'}} src="https://image.flaticon.com/icons/svg/1037/1037353.svg"/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}>Manufacturing</h3>
              </Link>
              </Grid>
            </Grid>
            </Grid> 
            </Grid>
            <Spacer height="100px"/>
            </Box>
         
     )
    }

    
    

