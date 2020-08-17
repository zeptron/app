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
import ActionsImg from '../../assets/actions.png'
import TrainImg from '../../assets/bottles.png'
import Stream from '../Components/Stream'
import Hubspot from '../Components/Hubspot'

export default function Production() {
    return (
        <div>
        <Hero 
        header="Improve QC for each product with computer vision"
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
        img={TrainImg}
        header="Train your AI on known defects or anomalies"
        subheader="To train your model, simply film a few training runs with our machine vision cameras and Zeptron does the rest"
        />
        <ImgLeft
        img={ActionsImg}
        header="Trigger actions and alerts when defects are detected"
        subheader="Detections happen in under 20ms and can trigger actions and alerts easily"
        />
        <ImgRight
        img={ConfigureImg}
        header="Configure counting for each product and defect class"
        subheader="Get production run analytics in no time with one-click set up for tracking and counting"
        />
        <ImgLeft
        img={ChartImg}
        header="Automatic real-time analysis of detection results"
        subheader="Zeptron automatically charts detection results for your model in real time "
        />
        <Spacer height="25px"/>
        <Start
            form={
              <Hubspot
                meetcode="/meeting-def"
              />
            }
            />    
        </div>
    )
}