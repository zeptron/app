import React from 'react'
import s from '../../styles/styles.module.css'
import {Grid, Box, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Hero from '../Components/Hero'

export default function Safety() {
    return (
        <div>
        <Hero 
        header="Deploy AI on CCTV to improve public health"
        bgImage='url(https://zepappassets.s3-ap-southeast-2.amazonaws.com/bg.jpg)'
        />
        
        </div>
    )
}