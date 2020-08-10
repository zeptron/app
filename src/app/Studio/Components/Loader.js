import React from 'react'
import Cogs from '../../animations/cogs'
import {Box, Grid} from '@material-ui/core'
import Spacer from 'react-spacer'

export default function Loader() {
    return (
        <div>
            <Box p={4}  bgcolor="primary.dark" color="primary.contrastText">
                <Spacer height="250px"/>
               <Grid container alignItems="center" justify="center">
                   <Grid item xs={2} style={{textAlign: 'center'}}>
                       <div>
                   <Cogs/>
                   </div>
                   </Grid>
               </Grid>
               <Spacer height="250px"/>
            </Box>
        </div>
    )
}