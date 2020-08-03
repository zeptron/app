import React from 'react'
import {Box, Grid, Button, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'

export default function Charts(props) {
    return (
        <div>
            <Box p={4}>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={10}>
                        <Grid container alignItems="center" justify="center">
                        <Hidden xsDown>
                            <Grid item md={6}>
                            <Spacer height="20px"/>
                            <h2 className={`${s.header} ${s.center}`} >
                                {props.header}
                            </h2>
                            <p className={`${s.subheader} ${s.center}`} >
                                {props.subheader}
                            </p>
                            <Spacer height="20px"/>
                            </Grid>
                            </Hidden>
                            <Grid item md={6}>
                                <img src={props.img} style={{maxWidth: '100%'}}/>
                            </Grid>
                            <Hidden smUp>
                            <Grid item md={6}>
                            <Spacer height="20px"/>
                            <h2 className={`${s.header} ${s.center}`} >
                                {props.header}
                            </h2>
                            <p className={`${s.subheader} ${s.center}`} >
                                {props.subheader}
                            </p>
                            <Spacer height="20px"/>
                            </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}