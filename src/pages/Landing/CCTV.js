import React from 'react'
import s from '../../styles/styles.module.css'
import {Grid, Box, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Hero from '../Components/Hero'
import Consume from '../Components/Privacy'
import ReactPlayer from 'react-player'
import ImgLeft from '../Components/ImgLeft'
import NotificationImg from '../../assets/notifications.png'
import ImgRight from '../Components/ImgRight'
import ChartImg from '../../assets/charts.png'
import Start from '../Components/Start'
import ConfigureImg from '../../assets/configure.png'
import Hubspot from '../Components/Hubspot'
import Features from '../Components/Features'
import CCTV from '../../assets/Router_alt.png'


export default function Health() {
    return (
        <div>
        <Hero 
        header="Add an AI overlay to your CCTV network"
        bgImage='url(https://zepappassets.s3-ap-southeast-2.amazonaws.com/cctv.jpg)'
        subheader="Use AI on CCTV networks for occupancy management, analytics, and monitoring"
        />
        <ImgLeft
        header="Connect CCTV streams easily"
        subheader="Zeptron's CCTV router plugs into your NVR/DVR and overlays AI on your CCTV"
        img={CCTV}
        button="See Demo"
        />
        <Features/>
        <ImgRight
        img={ConfigureImg}
        header="Configure tracking and counting for detections"
        subheader="Get better analytics by setting up multi-directional counting with one click"
        button="See Demo"
        />
        <ImgLeft
        img={NotificationImg}
        header="Receive notifications for detections that matter"
        subheader="Find out what you want to know when you want to know it with smart detection alerts"
        button="See Demo"
        />
        <ImgRight
        img={ChartImg}
        header="Get real-time analysis of detection results"
        subheader="Zeptron automatically charts detections in real time and can offer results in CSV / JSON"
        button="Get Started"
        />
        <Start
        form={
            <Hubspot
            />
            }
        />     
        </div>
    )
}