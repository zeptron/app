import React from 'react'
import {Box, Grid, Button, Hidden} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import ReactPlayer from 'react-player'
import Counting from '../../assets/counting.jpg'


export default function Notifications(props) {
    return (
        <div>
            <Box p={4}>
                <Spacer height="100px"/>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={10}>
                        <Grid container alignItems="top" justify="center">
                            <Grid item md={6} sm={8}>
                            <Box p={4}>
                            <h2 className={`${s.header} ${s.center}`} >
                                Face Mask Detection
                            </h2>
                            <ReactPlayer 
                                pip="true" 
                                muted 
                                width="100%" 
                                playing="true" 
                                url='https://vimeo.com/441931886' 
                                />
                            </Box>
                            </Grid>
                            <Grid item md={6} sm={8} >
                                <Box p={4}>
                                <h2 className={`${s.header} ${s.center}`} >
                                    Occupancy Management                                
                                </h2>
                                <Spacer height="40px"/>
                                <img src={Counting} style={{maxWidth: '100%'}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            </Box>
        </div>
    )
}