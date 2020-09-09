import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField, 
    Button, 
    Grid, 
    ButtonGroup
} from '@material-ui/core';
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

export default function Form(props){
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
            Message: `New query from: *Email:* ${userEmail}`, 
            TopicArn: 'arn:aws:sns:ap-southeast-2:485273623449:slack'
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
                        <ButtonGroup 
                        style={{width: 700}}
                        >
                      <TextField 
                            id="standard" 
                            label="Email address" 
                            variant="standard" 
                            value={userEmail}
                            onChange={setUserEmail}
                            style={{width: 250}}
                        />
                        <Button 
                        variant="contained" 
                        size="large" 
                        color="secondary" 
                        onClick={sendForm} ><strong>{props.button}</strong>
                        </Button>
                        </ButtonGroup>
                    </form>
                    </Grid>
                    <Grid item xs={12}>
                    <Spacer height="25px"/>
                </Grid>
                </Grid>
        </div>
    )
}