import React from 'react'
import {Box, Grid, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../styles/styles.module.css'
import Hsform from './Components/Hsform'
import HeroBG from '../assets/hero_bg2.jpg'
import Gun from '../assets/machine-gun.svg'
import Face from '../assets/facial-recognition.svg'
import Search from '../assets/job-search.svg'
import Plate from '../assets/license-plate.svg'
import Mask from '../assets/face-mask.svg'
import AI from '../assets/artificial-intelligence.svg'
import Router from '../assets/router.svg'
import Streaming from '../assets/streaming.svg'
import Conf from '../assets/video-conference.svg'


export default function Redesign() {

    const section = {
        height: '95vh',
       
    }

    const box = {
        zIndex: 1,
        position: 'relative',
        top: '-157px',
}
    
    const big = {
        backgroundImage: `url("${HeroBG}")`,
        backgroundSize: 'cover'
    }
    

    return (
        <div>
            <Box >
                <Box p={2}>
                        <Grid container  alignItems="center" justify="center">
                            <Grid item md={8}>
                            <Grid container style={section} alignItems="center" justify="center">
                                <Grid item md={6}>
                                    <Box >
                                    <h1 className={`${s.header}  `} >
                                        Zeptron deploys AI on any CCTV network in seconds
                                    </h1>
                                    <Spacer height="10px"/> 
                                    <h2 className={`${s.subheader} `}>
                                        Plug our router into your NVR and get a secure stream to cloud-based AI
                                    </h2>
                                    </Box>
                                </Grid>
                                <Grid item md={6}>
                                <Box p={2} style={box} width="600px" >
                                    <h3 className={`${s.subheader} ${s.left} `} style={{marginTop: 0}}>
                                        Start now
                                    </h3>
                                    <Spacer height="10px"/> 
                                    <Hsform/>
                                </Box>
                                </Grid>
                                </Grid>
                            </Grid> 
                        </Grid>
                </Box>
            </Box>

           
           
             {/* <-- / --> */}

            <Box>
                <Box minHeight="80vh" p={2}>
                    <Grid container  alignItems="center" justify="center">
                        <Grid item md={8}>
                            <Grid container style={section} justify="center">
                                <Grid item md={12}>
                                    <Grid container alignItems="center" justify="center">
                                        <Grid item md={4} >
                                        <Box p={2}>
                                        <img src={Face} style={{width: "40%"}}/>
                                        <h2 className={`${s.subheader} ${s.center} `}>
                                            Face Recognition
                                        </h2>
                                        </Box>
                                        </Grid>
                                         <Grid item md={4}>
                                         <Box p={2}>
                                         <img src={Plate} style={{width: "40%"}}/>
                                         <h2 className={`${s.subheader} ${s.center} `}>
                                            ALPR
                                        </h2>
                                        </Box>
                                        </Grid>
                                         <Grid item md={4}>
                                         <Box p={2}>
                                         <img src={Gun} style={{width: "40%"}}/>
                                         <h2 className={`${s.subheader} ${s.center} `}>
                                            Weapon Detection
                                        </h2>
                                        </Box>
                                        </Grid>
                                        <Grid item md={4}>
                                        <Box p={2}>
                                         <img src={Mask} style={{width: "40%"}}/>
                                         <h2 className={`${s.subheader} ${s.center} `}>
                                            Face Mask Detection
                                        </h2>
                                        </Box>
                                        </Grid>
                                         <Grid item md={4}>
                                         <Box p={2}>
                                         <img src={Search} style={{width: "40%"}}/>
                                         <h2 className={`${s.subheader} ${s.center} `}>
                                            Reverse Image Search
                                        </h2>
                                        </Box>
                                        </Grid>
                                        <Grid item md={4}>
                                        <Box p={2}>
                                         <img src={AI} style={{width: "40%"}}/>
                                         <h2 className={`${s.subheader} ${s.center} `}>
                                            Add your own model
                                        </h2>
                                        </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Grid> 
                        </Grid> 
                    </Box>
                <Spacer height="50px"/>
            </Box>

             {/* <-- / --> */}

            <Box bgcolor="primary.main" color="primary.contrastText">
                <Box minHeight="100vh" p={2}>
                    <Grid container  alignItems="center" justify="center">
                                <Grid item md={8}>
                                <Grid container style={section} alignItems="center" justify="center">
                                    <Grid item md={4}>
                                        <Box p={4}>
                                    <img src={Router} style={{width: "40%"}}/>
                                    <h2 className={`${s.subheader} ${s.center} `}>
                                            Plug router into the NVR
                                        </h2>
                                        </Box>
                                    </Grid>
                                    <Grid item md={4}>
                                    <Box p={4}>
                                    <img src={Conf} style={{width: "40%"}}/>
                                    <h2 className={`${s.subheader} ${s.center} `}>
                                            Select your AI model
                                        </h2>
                                        </Box>
                                    </Grid>
                                    <Grid item md={4}>
                                    <Box p={4}>
                                    <img src={Streaming} style={{width: "40%"}}/>
                                    <h2 className={`${s.subheader} ${s.center} `}>
                                            Connect streams to AI
                                        </h2>
                                    </Box>
                                    </Grid>
                                </Grid>
                                </Grid> 
                        </Grid> 
                </Box>
            </Box>

             {/* <-- / --> */}

             <Box>
                <Box minHeight="100vh" p={2}>
                    <Grid container  alignItems="center" justify="center">
                                <Grid item md={8}>
                                <Grid container style={section} alignItems="center" justify="center">
                                    <Grid item md={8}>
                                        <h1 className={`${s.header} ${s.center} `}>
                                            Get instant remote access to CCTV streams with AI of your choice overlaid
                                        </h1>
                                        <Spacer height="10px"/> 
                                    </Grid>
                                    </Grid>
                                </Grid> 
                        </Grid> 
                </Box>
            </Box>


             {/* <-- / --> */}

             <Box>
                <Box minHeight="100vh" p={2}>
                    <Grid container  alignItems="center" justify="center">
                                <Grid item md={8}>
                                <Grid container style={section} alignItems="center" justify="center">
                                    <Grid item md={8}>
                                        <h1 className={`${s.header} ${s.center} `}>
                                            Get instant remote access to CCTV streams with AI of your choice overlaid
                                        </h1>
                                        <Spacer height="10px"/> 
                                    </Grid>
                                    </Grid>
                                </Grid> 
                        </Grid> 
                </Box>
            </Box>


        </div>
    )
}