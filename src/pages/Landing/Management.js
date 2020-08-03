import React from 'react'
import s from '../../styles/styles.module.css'
import {Grid, Box, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Hero from '../Components/Hero'
import Consume from '../Components/Privacy'
import ReactPlayer from 'react-player'
import Notifications from '../Components/Notifications'
import NotificationImg from '../../assets/notifications.png'
import Charts from '../Components/Charts'
import ChartImg from '../../assets/charts.png'
import Start from '../Components/Start'

export default function Management() {
    return (
        <div>
        <Hero 
        header="Deploy AI on CCTV to bolster health & safety"
        bgImage='url(https://zeptronco.s3-ap-southeast-2.amazonaws.com/t.jpg)'
        subheader="Use CCTV networks to provide analytics and notifications for public health events"
        />
        <Consume
            header="Consume your existing video streams"
            subheader="Use Zeptron on your existing CCTV network, IP Cameras, or wired hardware"
            asset={<ReactPlayer 
                pip="true" 
                muted 
                width="100%" 
                playing="true" 
                url='https://vimeo.com/441931886' 
            />}
            />
        <Notifications
        img={NotificationImg}
        header="Receive notifications for detections that matter"
        subheader="Get alerted for what you want to know when you want to know it with Zeptron's smart detection alerts."
        />
        <Charts
        img={ChartImg}
        header="Get real-time analysis of detection results"
        subheader="Zeptron automatically charts detection results for your model in real time "
        />
        <Start/>     
        </div>
    )
}