import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { Link } from "react-router-dom";
import Robot from "../../assets/robot.svg"
import CCTV from "../../assets/camera.svg"

  export default function Hero() {
    const [spacing] = React.useState(4);
 
   return (

          <Box p={2} style={{backgroundColor: '#e0e4e0'}} >
          <Grid container justify="center">
            <Grid item md={10} sm={10} xs={12}>
            <Spacer height="50px"/>
            <h2 className={`${s.header} ${s.center}`} >
              Explore AI for
              </h2>
            <Spacer height="50px"/>
              <Grid container  justify="center" spacing={spacing}>
              <Grid item md={4} sm={6}  xs={12}>
                <Link to="/cctv" className={s.belowlink}>
              <Spacer height="20px"/>
              <img alt="AI for CCTV" style={{maxWidth: '30%'}} src={CCTV}/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}><strong>CCTV</strong></h3>
              </Link>
              </Grid>
              <Grid item md={4} sm={6}  xs={12}>
              <Link to="/production" className={s.belowlink}>
              <Spacer height="20px"/>
              <img alt="AI for QC" style={{maxWidth: '30%'}} src={Robot}/>
              <h3 style={{textTransform: 'uppercase'}} className={`${s.subheader} ${s.center}`}><strong>Production</strong></h3>
              </Link>
              </Grid>
            </Grid>
            </Grid> 
            </Grid>
            <Spacer height="100px"/>
            </Box>
         
     )
    }

    
    

