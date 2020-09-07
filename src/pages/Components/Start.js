import React from 'react';
import {Box, Grid} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { css } from "glamor";
import Bg from '../../assets/startbg.jpg'
import Form from './Form'
  export default function Start(props) {
    
 
    const [spacing] = React.useState(2);
   
   return (
    <Box id="start" p={4} color="secondary.main" {...css(styles.container)}   >
         <Grid container justify="center" spacing={spacing} {...css(styles.content)}>
            <Grid item md={8} sm={10} xs={12}>
            <Spacer height="200px"/>
            <Grid container alignItems="center" justify="center" spacing={spacing}>
            <Grid item md={6} xs={12}>
            <h2 className={`${s.header} `}>
              {props.header || 'Do you need to add AI to your CCTV?'}
            </h2>
            <p className={`${s.subheader} `}>
            </p>
            <Spacer height="50px"/>
            </Grid> 
            <Grid item md={6} xs={12}>
            <Spacer height="20px"/>
            {/* {props.form} */}
            <Form />
            
            </Grid>
            </Grid> 
            <Spacer height="150px"/>
        </Grid> 
        </Grid>
    </Box>

)
}
const styles = {
  container: {
    overflow: "hidden",
    position: "relative",
    padding: "0px !important",
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  },
  content: {
  position: "relative",
  padding: "32px 0px"
},
coverOpacity: {
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "#e2dbce",
  opacity: 0.7
}

}