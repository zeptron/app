import React from 'react'
import Hero from './Components/Hero'
import Start from './Components/Start'
import Image from '../assets/ipadapp.jpg'
import CCTV from '../assets/Router_alt.png'
import Stream from '../assets/camx.png'
import ImgLeft from './Components/ImgLeft'
import ImgRight from './Components/ImgRight'
import Hubspot from './Components/Hubspot'
import ConfigureImg from '../assets/configure.png'
import ChartImg from '../assets/charts.png'
import NotificationImg from '../assets/notifications.png'
import SEO from '../utils/SEO'

export default function App(props) {

    return (
        <div>
            <SEO 
            title="Zeptron - App | AI app for computer vision on CCTV and streaming video"
            path="app"
            />
            <Hero
            header="Deploy computer vision AI quickly with a simple app"
            subheader="Configure, provision and run any computer vision software through a simple app"
            bgImage={`url('${Image}')`}
            />
            <ImgLeft
            header="Connect CCTV streams easily"
            subheader="Zeptron's CCTV router plugs into your NVR/DVR and overlays AI on your CCTV"
            img={CCTV}
            button="See Demo"
            />
             <ImgRight
            header="Set up new video streams with Ultra-HD cameras"
            subheader="Camera body is 3D printed with ethernet, 802.11 bgn wireless, and GPIO pins"
            img={Stream}
            button="See Demo"
            />
            <ImgLeft
            img={ConfigureImg}
            header="Configure tracking and counting for detections"
            subheader="Get better analytics by setting up multi-directional counting with one click"
            button="See Demo"
            />
            <ImgRight
            img={NotificationImg}
            header="Receive notifications for detections that matter"
            subheader="Find out what you want to know when you want to know it with smart detection alerts"
            button="See Demo"
            />
            <ImgLeft
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