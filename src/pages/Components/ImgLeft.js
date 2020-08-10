import React from 'react'
import {Box, Grid, Button, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'

export default function Notifications(props) {
    return (
        <div>
            <Box p={4}>
                <Spacer height="50px"/>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={10}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item md={6}>
                            <Box p={4}>
                                <img src={props.img} style={{maxWidth: '100%'}}/>
                                </Box>
                            </Grid>
                            <Grid item md={6} >
                                <Box >
                            <Spacer height="20px"/>
                            <h2 className={`${s.header} ${s.center}`} >
                                {props.header}
                            </h2>
                            <p className={`${s.subheader} ${s.center}`} >
                                {props.subheader}
                            </p>
              <Spacer height="20px"/>
              </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Spacer height="50px"/>
            </Box>
        </div>
    )
}