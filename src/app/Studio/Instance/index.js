import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid, Paper, Card} from '@material-ui/core'
import s from '../../../styles/styles.module.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
   
    control: {
      padding: theme.spacing(4),
    },
  }));

  // Data from GraphQL / DynamoDB

  const instanceName = "InstanceName"
  const instanceState = false
  const publicIP = "{publicIP}"


  export default function Instance() {
    const [spacing, setSpacing] = React.useState(8);
    const [state, setState] = React.useState({
        Started: instanceState,
      });
      const instanceSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    const classes = useStyles();
    

   return (
            <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <h1  className={s.header} style={{textAlign: 'center'}}>
                {instanceName}                
                </h1>
            </Box>

            <Box>
                <Spacer height="100px"/>
                <Grid container alignItems="center" justify="center">
                  <Grid item md={8}>
                  <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={state.Started} onChange={instanceSwitch} name="Started" />}
                    label="Instance Switch"
                />
                 <Button variant="contained" color="secondary" size="large">
                      Run
                  </Button>
                <Button href="/studio/{id}/analytics" variant="contained" color="primary" size="large">
                      Analytics
                  </Button>
                </FormGroup>
                
                  <Spacer height="50px"/>
                  <div className="devnotes">
                  <h3>{"<"}&nbsp;DeveloperNotes&nbsp;{">"}</h3>
                  <p>Switch activates Lambda to Start/Stop instance.</p>
                
                  <p>When starting / stopping, show {"<cogs/>"} component from src/app/animations/cogs.js until the Lambda returns success, then show/hide 'Run' button</p>

                  <p>Run button triggers Lambda which SSHs into instance and runs python3 script with parameters from modelConfig as flags. <br/>Lambdas are found in /lambdas</p>
                  <h3>{"</"}&nbsp;DeveloperNotes&nbsp;{">"}</h3>
                  </div>
                  <h2>Live Stream</h2>
                  <Grid container alignItems="center" justify="center" spacing={2}>
                    <img src="https://via.placeholder.com/640x460.png?text=Live+Stream" />
                    </Grid>
                    <p>Comes from {publicIP}:5000/0/mjpeg</p>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            </Box>
            </div>

   )
   }