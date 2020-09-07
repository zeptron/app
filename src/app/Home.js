import React from 'react'
import Shell from './Components/Shell.js'
import {Box, Grid, Button} from '@material-ui/core'
import s from '../../src/styles/styles.module.css'
import Spacer from 'react-spacer';
import UserContext from "../UserContext";
import { Auth } from "aws-amplify";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Chart from './Components/Chart'
import Line from './Components/LineChart'

export default function Home() {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
            <div>
                <Shell sidebar={
                    <>
                    <Box color="primary.contrastText" p={2}>
                    <Spacer height="100px"/>
                    <h4 className={s.header}>Oseh Mathias</h4>
                    <Spacer height="100px"/>
                    </Box>
                    </>
                }>
                    <Box p={2}>
                  <Spacer height="100px"/>
                    <Grid container alignItems="center" justify="center">
                       
                    <Grid item md={4} xs={12} >
                        <Box height={1} p={2} m={2}>
                        <Spacer height="20px"/>
                        <div style={{textAlign: 'left'}}>
                            <h4 style={{padding: 0, margin: 0}}>People</h4>
                            <h1 style={{padding: 0, margin: 0}} className={s.header}>132 <ArrowUpwardIcon style={{color: 'limegreen', fontSize: 'xx-large'}}/></h1>
                            </div>
                        <Spacer height="20px"/>
                        </Box>
                    </Grid>
                    <Grid item md={8} xs={12}>
                    <Box  height={1} p={2} m={2}>
                        <Spacer height="20px"/>
                        <Chart/>
                        <Spacer height="20px"/>
                        </Box>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <Box  height={1} p={2} m={2}>
                        <Spacer height="20px"/>
                        <Line/>
                        <Spacer height="20px"/>
                        </Box>
                    </Grid>
                    <Grid item md={3} xs={6}>
                    <Box color="primary.contrastText"  bgcolor="gray" height={1} p={2} m={2}>
                        <Spacer height="20px"/>
                       Cam
                        <Spacer height="20px"/>
                        </Box>
                    </Grid>
                    <Grid item md={3} xs={6}>
                    <Box color="primary.contrastText"  bgcolor="gray" height={1} p={2} m={2}>
                        <Spacer height="20px"/>
                        Cam
                        <Spacer height="20px"/>
                        </Box>
                    </Grid>
                    <Grid item md={3} xs={6}>
                    <Box color="primary.contrastText"  bgcolor="gray" height={1} p={2} m={2}>
                        <Spacer height="20px"/>
                       Cam
                        <Spacer height="20px"/>
                        </Box>
                    </Grid>
                    <Grid item md={3} xs={6}>
                    <Box color="primary.contrastText"  bgcolor="gray" height={1} p={2} m={2}>
                        <Spacer height="20px"/>
                        Cam
                        <Spacer height="20px"/>
                        </Box>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
                </Box>
                </Shell>
            </div>
    )
}


