import React from 'react'
import {Box, Grid} from '@material-ui/core'
import Spacer from 'react-spacer'

export default function NotFound() {
    return (
        <div>
            <Box p={4}  bgcolor="primary.dark" color="primary.contrastText">
                <Spacer height="250px"/>
               <Grid container alignItems="center" justify="center">
                   <Grid item xs={2} style={{textAlign: 'center'}}>
                       <div>
                        <h3 style={{color: 'white'}}>Not Found</h3>
                   </div>
                   </Grid>
               </Grid>
               <Spacer height="250px"/>
            </Box>
        </div>
    )
}