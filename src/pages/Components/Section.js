import React from 'react'
import {Box, Grid, Button} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import CameraRearIcon from '@material-ui/icons/CameraRear';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SecurityIcon from '@material-ui/icons/Security';

export default function Section(props) {
    return (
        <div>
            <Box p={4} style={{borderBottom: '1px solid brown'}}>
                <Spacer height="100px"/>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={10}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item md={4}>
                                <CameraRearIcon style={{fontSize: 50}} />
                                <h4 className={`${s.subheader} ${s.center}`}>Instant CCTV connection</h4>
                                <p style={{fontSize: 'larger'}}>Zeptron plugs into your CCTV NVR and connects your streams securely to AI in seconds</p>
                            </Grid>
                            <Grid item md={4}>
                                <PhoneIphoneIcon style={{fontSize: 50}} />
                                <h4 className={`${s.subheader} ${s.center}`}>Cloud-based app</h4>
                                <p style={{fontSize: 'larger'}}>Control all cameras, set up notifications, and visualise data through the app</p>
                            </Grid>
                            <Grid item md={4}>
                                <SecurityIcon style={{fontSize: 50}} />
                                <h4 className={`${s.subheader} ${s.center}`}>Bank-grade Security</h4>
                                <p style={{fontSize: 'larger'}}>Zeptron uses bank-grade security to ensure that your data remains safe </p>
                            </Grid>
                           
                           
                        </Grid>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            </Box>
        </div>
    )
}