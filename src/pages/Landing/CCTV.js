import React from 'react'
import Hero from '../Components/Hero'
import ImgLeft from '../Components/ImgLeft'
import NotificationImg from '../../assets/notifications.png'
import ImgRight from '../Components/ImgRight'
import ChartImg from '../../assets/charts.png'
import Start from '../Components/Start'
import ConfigureImg from '../../assets/configure.png'
import Hubspot from '../Components/Hubspot'
import Features from '../Components/Features'
import CCTV from '../../assets/Router_alt.png'
import SEO from '../../utils/SEO'

export default function Health() {
    return (
        <div>
        <SEO 
        title="Zeptron - CCTV | Add AI to CCTV in 60 seconds for occupancy management, analytics, and monitoring"
        path="cctv"
        />
        <Hero 
        header="Add an AI overlay to your CCTV network"
        bgImage='url(https://zepappassets.s3-ap-southeast-2.amazonaws.com/cctv.jpg)'
        subheader="Use AI on CCTV networks for occupancy management, analytics, and monitoring"
        />
        <ImgLeft
        header="Connect CCTV streams easily"
        subheader="Zeptron's CCTV router plugs into your NVR/DVR and overlays AI on your CCTV"
        img={CCTV}
        alt="Connect CCTV to AI in seconds"
        button="See Demo"
        />
        <Features/>
        <ImgRight
        img={ConfigureImg}
        alt="Set up tracking and counting for AI in one click"
        header="Configure tracking and counting for detections"
        subheader="Get better analytics by setting up multi-directional counting with one click"
        button="See Demo"
        />
        <ImgLeft
        img={NotificationImg}
        alt="Get notifications for AI detection"
        header="Receive notifications for detections that matter"
        subheader="Find out what you want to know when you want to know it with smart detection alerts"
        button="See Demo"
        />
        <ImgRight
        img={ChartImg}
        alt="Automatic charting for AI results"
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