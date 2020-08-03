import React from 'react'
import s from '../../styles/styles.module.css'
import {Grid, Box, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Hero from '../Components/Hero'
import Consume from '../Components/Privacy'
import ReactPlayer from 'react-player'
import Notifications from '../Components/Notifications'

export default function Health() {
    return (
        <div>
        <Hero 
        header="Deploy AI on CCTV to improve public health & safety"
        bgImage='url(https://zeptronco.s3-ap-southeast-2.amazonaws.com/t.jpg)'
        subheader="Use CCTV networks to provide analytics and notifications for public health events"
        />
        <Consume
            header="Consume existing video streams"
            subheader="Use Zeptron on your existing CCTV network, IP Cameras, or wired hardware"
            asset={<ReactPlayer 
                pip="true" 
                muted 
                width="100%" 
                playing="true" 
                url='https://vimeo.com/441931886' 
            />}
            />
        <Notifications/>
        
        </div>
    )
}