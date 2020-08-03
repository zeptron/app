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
import Budlight from '../../assets/budlight.jpg'
import ConfigureImg from '../../assets/configure.png'
import Stream from '../Components/Stream'

export default function Production() {
    return (
        <div>
        <Hero 
        header="Improve QC for every product using computer vision"
        bgImage='url(https://zeptronco.s3-ap-southeast-2.amazonaws.com/bottlecap.jpg)'
        subheader="Manage and deploy computer vision models for each of your products from Zeptron"
        />
        <Consume
            header="All of your products. One app"
            subheader="The value of Zeptron lies in its ability to manage, configure and deploy all of your deep learning models from one easy app"
            asset={<img src={Budlight} style={{maxWidth: '100%'}}/>}
            />
        <Stream/>
        <ImgRight
        img={NotificationImg}
        header="Train your AI on known defects or anomalies"
        subheader="Get alerted for what you want to know when you want to know it with Zeptron's smart detection alerts."
        />
        <ImgLeft
        img={NotificationImg}
        header="Train your AI on known defects or anomalies"
        subheader="Get alerted for what you want to know when you want to know it with Zeptron's smart detection alerts."
        />
        <ImgRight
        img={ConfigureImg}
        header="Configure counting for each detection class"
        subheader="Set up counting from left to right or up and down for each of your detection classes"
        />
        <Charts
        img={ChartImg}
        header="Automatic real-time analysis of detection results"
        subheader="Zeptron automatically charts detection results for your model in real time "
        />
        <Start/>     
        </div>
    )
}