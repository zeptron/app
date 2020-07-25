import React, { useState } from 'react';
import AWS from 'aws-sdk';
import Spacer from 'react-spacer';
import Switch from '@material-ui/core/Switch';
import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import s from '../../../styles/styles.module.css';
import useQuery from '../../../graphql/useQuery';
import * as mutations from '../../../graphql/mutations';

export const SingleInstance = ({ modelConfig }) => {
  const [instanceState, setInstanceState] = useState(modelConfig.instanceState);
  const updateModelConfigQuery = useQuery(mutations.updateModelConfig);

  const [loadingInstanceState, setLoadingInstanceState] = useState(false);
  const [loadingRunInstance, setLoadingRunInstance] = useState(false);

  const switchInstanceState = () => {
    if (instanceState) {
      stopInstance();
    } else {
      startInstance();
    }
  };

  const startInstance = async () => {
    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const AWSEC2 = new AWS.EC2();

    setLoadingInstanceState(true);

    AWSEC2.startInstances({
      InstanceIds: [modelConfig.EC2instanceID]
    }, (err, data) => {
      setLoadingInstanceState(false);

      if (!err) {
        setInstanceState(true);
      }

      updateModelConfigQuery.fetch({
        input: {
          id: modelConfig?.id,
          instanceState: true,
        }
      });
    });
  };

  const stopInstance = async () => {
    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const AWSEC2 = new AWS.EC2();

    setLoadingInstanceState(true);

    AWSEC2.stopInstances({
      InstanceIds: [modelConfig.EC2instanceID]
    }, (err, data) => {
      setLoadingInstanceState(false);

      if (!err) {
        setInstanceState(false);
      }

      updateModelConfigQuery.fetch({
        input: {
          id: modelConfig?.id,
          instanceState: false,
        }
      });
    });
  };

  const runInstance = async () => {
    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const SSM = new AWS.SSM();

    setLoadingRunInstance(true);

    const params = {
      DocumentName: 'AWS-RunShellScript',
      CloudWatchOutputConfig: {
        CloudWatchLogGroupName: 'ZeptronAPP',
        CloudWatchOutputEnabled: true
      },
      Comment: 'run instance',
      InstanceIds: [`${modelConfig.EC2instanceID}`],
      NotificationConfig: {
        NotificationArn: process.env.REACT_APP_AWS_NOTIFICATION_ARN,
        NotificationEvents: ['All'],
        NotificationType: 'Command'
      },
      Parameters: {
        'commands': [
          `cd /home/ubuntu/FairMOT/src && workon fairmot &&  python count_fairMOT.py`,
        ],
      },
      ServiceRoleArn: process.env.REACT_APP_AWS_SERVICE_ROLE_ARN,
    };

    SSM.sendCommand(params, (err, data) => {
      setLoadingRunInstance(false);
    });
  };

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: 'center' }}>
          {modelConfig.instanceName}
        </h1>
      </Box>

      <Box>
        <Spacer height="100px"/>
        <Grid container alignItems="center" justify="center">
          <Grid item md={8}>
            <Grid container alignItems="center" justify="center">
              <Grid item md={6} xs={12}>
                <Box p={2}>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={instanceState}
                          onChange={switchInstanceState}
                          name="Started"
                          disabled={loadingInstanceState}
                        />
                      }
                      label="Power"
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={runInstance}
                    >
                      Run
                    </Button>
                    <Button
                      href={`/studio/${modelConfig.id}/analytics`}
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Analyse
                    </Button>
                  </FormGroup>
                </Box>
              </Grid>
            </Grid>

            <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', marginTop: '20px' }}>
              {loadingInstanceState && (
                <Typography align='center'>
                  {instanceState ? 'Stopping instance...' : 'Starting instance...'}
                </Typography>
              )}

              {loadingRunInstance && (
                <Typography align='center'>
                  Running instance...
                </Typography>
              )}
            </div>

            <Box  p={4}>
              <Grid container alignItems="center" justify="center">
               

                <Grid item md={8}>
                  <h2 style={{ textTransform: 'uppercase' }}>Live Stream</h2>
                  <Grid container alignItems="center" justify="center">

                    <Spacer height="50px"/>

                    <h2>Live Stream</h2>
                    <Grid container alignItems="center" justify="center">
                      <img
                        alt="Stream loading"
                        src={`http://${modelConfig.publicIP}:8000/video_feed`}
                        style={{ maxWidth: '90%' }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Spacer height="100px"/>
              </Grid>
            </Box>
            <p>Comes from {modelConfig.publicIP}</p>
          </Grid>
        </Grid>
        <Spacer height="100px"/>
      </Box>
    </div>
  );
};
