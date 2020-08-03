import React from 'react'
import s from '../../styles/styles.module.css'
import {Grid, Box, Button} from '@material-ui/core'
import Spacer from 'react-spacer'

export default function Production() {
    return (
        <div>
        <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <Spacer height="10px"/>
                <Grid container alignItems="center" justify="center">
                <Grid item md={4} xs={12}>
                <Spacer height="100px"/>
                <h1  className={`${s.header} ${s.center}`}>
                    Deploy AI on CCTV to improve public health
                </h1>
                <Spacer height="100px"/>
                </Grid>
                </Grid>
        </Box>
        <Box>
            
        </Box>
        </div>
    )
}