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
                    <Spacer height="=90px"/>
                    </Box>
                    <Box p={2}>
                    <Spacer height="100px"/>
                    <Grid container justify="center" spacing={spacing}>
                      <Grid item md={8} sm={10} xs={12}>
                      <Grid container justify="center" spacing={spacing}>
                      <Grid item md={6} >
                        <p className={s.subheader}>Zeptron is a code-free deployment solution for computer vision</p>
                        <Spacer height="20px"/>
                        <p className={s.subheader}>Drop us a line</p>
                        <p className={s.subheader}><a style={{color: 'black'}} href="mailto:hello@zeptron.co">hello@zeptron.co</a></p>
                        <p className={s.subheader}>Level 4, 11 York Street<br/>Sydney, NSW 2000</p>
                      </Grid>
                      </Grid>
                      <Spacer height="160px"/>
                      </Grid>
                      </Grid>
                      </Box>
                      </div>
     )
    }

    
    

