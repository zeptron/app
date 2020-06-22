import React from 'react'
import {Grid, Box, Button} from '@material-ui/core'
import s from '../../../styles/styles.module.css'
import Spacer from 'react-spacer'

export default function Server () {
    return (
    <div>
            <p className={s.subclass}>IP: 13.89.144.34<br/><br/>PORT: 5342</p>
            <Spacer height="50px"/>
            <Button href="/model/currency/stream" variant="contained" color="primary" size="large">
                <span className={s.ctabutton}>Proceed</span>
            </Button>
    </div>
    )
}

