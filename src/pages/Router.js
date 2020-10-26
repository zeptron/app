import React from 'react'
import {Box, Grid} from '@material-ui/core'
import s from '../styles/styles.module.css'
import Spacer from 'react-spacer'

export default function Routers() {

    return ( 
        <div>
           <Box p={2}>
               <Spacer height="100px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8}>
                    <h2 className={`${s.header}`}>
                  Purchase Zeptron routers
                    </h2>
                    <p className={s.p}>
Receive                  </p>
                </Grid>
            </Grid>
           </Box>
        </div>
    )
}