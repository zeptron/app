import React from 'react'
import {Box, Grid, Button} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'

export default function Notifications(props) {
    return (
        <div>
            <Box p={4}>
                <Spacer height="100px"/>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={10}>
                        <Grid container alignItems="center" justify="center">
                            <Grid item md={6}>
                            <Box p={4}>
                                <img alt={props.alt} src={props.img} style={{maxWidth: '100%'}}/>
                                </Box>
                            </Grid>
                            <Grid item md={6} >
                            <Box >
                            <h2 className={`${s.header} ${s.center}`} >
                                {props.header}
                            </h2>
                            <p className={`${s.subheader} ${s.center}`} >
                                {props.subheader}
                            </p>
                            <Spacer height="20px"/>
                                {
                                props.button ? ( 
                                <Button 
                                href={props.buttonLink || '#start'} 
                                color={props.buttonColor || 'primary'} 
                                size={props.buttonSize || 'large'} 
                                variant={props.buttonVariant || 'contained'}
                                >
                                {props.button}
                                </Button>
                                 ) : (
                                <div></div>
                                 )}
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