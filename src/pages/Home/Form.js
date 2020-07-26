import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField, 
    Button, 
    Grid, 
    MenuItem, 
    FormHelperText,
    FormControl,
    Select,
    InputLabel
} from '@material-ui/core';
import s from '../../styles/styles.module.css'
import Spacer from 'react-spacer'
import AWS from 'aws-sdk';
import useInput from '../../utils/hooks/useInput';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '25ch', 
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    }));

export default function Form(){
    const classes = useStyles();

    const [userName, { setWrap: setUserName }] = useInput('');
    const [userOrg, { setWrap: setUserOrg }] = useInput('');
    const [userNum, { setWrap: setUserNum }] = useInput('');
    const [userEmail, { setWrap: setUserEmail }] = useInput('');

    const sendForm = async () => {
        AWS.config.update({
            region: process.env.REACT_APP_AWS_REGION,
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
          });
        const SNS = new AWS.SNS();
        const params = {
            Message: `New query from: \n \n *Name:* ${userName} \n *Company:* ${userOrg} \n *Number:* ${userNum} \n *Email:* ${userEmail}`, 
            TopicArn: 'arn:aws:sns:ap-southeast-2:047384901313:zeptronusers'
          };
          SNS.publish(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     
                console.log(data)
                const [userName, userOrg, userNum, userEmail] = ''
            
            ;           // successful response
          });
    }

   
    return (
        <div>
           
                <Grid container alignItems="center" justify="center">
                    <Grid item lg={6} md={9} sm={10} xs={12}>
                    <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                        id="filled-basic" 
                        label="Name" 
                        variant="filled" 
                        value={userName}
                        onChange={setUserName}
                    />
                    <TextField 
                        id="filled-basic" 
                        label="Organisation" 
                        variant="filled" 
                        value={userOrg}
                        onChange={setUserOrg}
                    />
                    <TextField 
                        id="filled-basic" 
                        label="Number" 
                        variant="filled"
                        value={userNum}
                        onChange={setUserNum}
                    />
                    <TextField 
                        id="filled-basic" 
                        label="Email" 
                        variant="filled" 
                        value={userEmail}
                        onChange={setUserEmail}
                    />
                    </form>
                    </Grid>
                    <Grid item xs={12}>
                    <Spacer height="25px"/>
                    <Button 
                    variant="contained" 
                    size="large" 
                    color="secondary" 
                    onClick={sendForm} ><strong>Start</strong></Button>
                    </Grid>
                </Grid>
        </div>
    )
}