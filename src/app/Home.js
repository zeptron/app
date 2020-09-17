import React from 'react'
import {Box, Grid, Button} from '@material-ui/core'
import s from '../../src/styles/styles.module.css'
import Spacer from 'react-spacer';
import UserContext from "../UserContext";
import { Auth } from "aws-amplify";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Chart from './Components/Chart'
import Line from './Components/LineChart'

export default function Home() {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
            <div>
               
            </div>
    )
}


