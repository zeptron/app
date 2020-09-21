import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import Spacer from 'react-spacer';
import Switch from '@material-ui/core/Switch';
import { Box, Button, Grid, Hidden } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Cogs from '../../animations/cogs';
import BarChartIcon from '@material-ui/icons/BarChart';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import s from '../../../styles/styles.module.css';
import useQuery from '../../../graphql/useQuery';
import * as mutations from '../../../graphql/mutations';
import { sleep } from '../../../utils/sleep';
import RefreshIcon from '@material-ui/icons/Refresh';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

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
      InstanceIds: [modelConfig.EC2instanceID],
    }, async (err, data) => {
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
      await sleep(5000)
      AWSEC2.describeInstances({
        InstanceIds: [modelConfig.EC2instanceID],
      }, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        updateModelConfigQuery.fetch({
          input: {
            id: modelConfig?.id,
            publicIP: data?.Reservations?.[0]?.Instances?.[0]?.PublicIpAddress,
          }
        });
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
          `cd ${modelConfig.model.directory} && ${modelConfig.model.virtualenv} ${modelConfig.model.command} --tableName=${modelConfig.tableName} --line=${modelConfig.line}`,
        ],
      },
      ServiceRoleArn: process.env.REACT_APP_AWS_SERVICE_ROLE_ARN,
    };

    SSM.sendCommand(params, (err, data) => {
      setLoadingRunInstance(false);

      const AWSEC2 = new AWS.EC2();

      AWSEC2.describeInstances({
        InstanceIds: [modelConfig.EC2instanceID],
      }, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        updateModelConfigQuery.fetch({
          input: {
            id: modelConfig?.id,
            publicIP: data?.Reservations?.[0]?.Instances?.[0]?.PublicIpAddress,
          }
        });
      });
    });
  };

  

  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    document.title = `Zeptron - Studio | ${modelConfig.instanceName}`
  }, []);

  return (
    <div>
          <Box p={4} bgcolor="#000" color="primary.contrastText">
          <Spacer height="20px"/>
              <Grid container alignItems="center" justify="center" id="window">
                <Grid item md={7} sm={9} xs={12}>
                <Grid item md={12} >
                    <h3 style={{textAlign: 'center'}} className={s.header} >
                    {modelConfig.instanceName}
                    </h3>
                    </Grid>
                  <Grid container alignItems="center" justify="center" >
                    <Hidden smDown>
                    <Grid item md={3}>
                      <Spacer height="20px"/>
                    <div className={s.chartSelectorWrapper2}>
                      <FormControlLabel
                      control={
                        <Switch
                          checked={instanceState}
                          onChange={switchInstanceState}
                          name="Started"
                          disabled={loadingInstanceState}
                        />
                      }
                      label={instanceState ? 'On' : 'Off'}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={runInstance}
                    >
                    <PlayArrowIcon/>
                    </Button>
                    </div>
                    </Grid>
                    </Hidden>
                    <Hidden mdUp>
                    <Grid item md={3}>
                      <Spacer height="25px"/>

                    <div className={s.chartSelectorWrapper2}>
                      <FormControlLabel
                     
                      control={
                        <Switch
                          checked={instanceState}
                          onChange={switchInstanceState}
                          name="Started"
                          disabled={loadingInstanceState}
                        />
                      }
                      label={instanceState ? 'On' : 'Off'}
                    />
                    <Button
                      style={{marginLeft: 5}}
                      variant="contained"
                      color="secondary"
                      size="small"
                      onClick={runInstance}
                    >
                    <PlayArrowIcon/>
                    </Button>
                    </div>
                    </Grid>
                    </Hidden>
                    <Grid item md={3}>
                    <Spacer height="25px"/>

                    <div className={s.chartSelectorWrapper}>
                      <Hidden mdDown>
                      <Button
                     style={{marginLeft: 5}}
                      href="#window"
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      <FullscreenIcon/>
                    </Button>
                      </Hidden>
                      <Button
                     style={{marginLeft: 5}}
                      href={`/studio/${modelConfig.id}/analytics`}
                      variant="contained"
                      color="secondary"
                      size="small"
                    >
                      <BarChartIcon/>
                    </Button>
                    <Button
                   style={{marginLeft: 5}}
                  onClick={refreshPage}
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  <RefreshIcon/>
                </Button>
                    </div>
                    </Grid>
                  </Grid>
                  </Grid>

                    
                    <Grid item xs={12}>
                    <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', marginTop: '20px' }}>
                    {loadingInstanceState && (
                      <Cogs/>
                    )}

                    {loadingRunInstance && (
                      <Cogs/>
                    )}
                    </div>
                    <div style={{minHeight: 300, minWidth: '100%', backgroundColor: 'black'}}>
                      <img
                        alt="Stream loading"
                        src={
                          modelConfig.cfStream ? (
                           `${modelConfig.cfStream}`
                          ) : (
                           `http://${modelConfig.publicIP}:${modelConfig.port || '8000'}/video_feed`
                          )
                         }
                        style={{ maxWidth: '100%' }}
                        onError={(e)=>{e.target.onerror = null; e.target.src="https://forums.digitalpoint.com/proxy/yrWFm%2BbujmpVzRJJI0zQH6cnH69kXw4ANJaDnvDvDAfkBE%2F3rTD41Dmr908lo3FQWU5AMJzxSLk%2FyHtoScNs5ed0Q1H%2Bqa4TCCgQjojovWOh5Nuvx9ORszRu7wabvdBCz9xeWECfieQjcLU%3D/image.png"}}
                        />
                      </div>
                      </Grid>
                      <br/>
                      <Grid container alignItems="center" justify="center">
                      <h3 className={s.ocr}>{modelConfig.publicIP}</h3><h3 className={s.ocr}>·</h3> <h3 className={s.ocr}>{modelConfig.streamPort || '5555'}</h3>
                      </Grid>
                      <Grid container alignItems="center" justify="center">
                      <h3 style={{color: 'white'}} className={s.ocr}>{modelConfig.model.name}</h3>
                      </Grid>
                      <Grid container alignItems="center" justify="center">
                      <h3 style={{color: 'white'}}  className={s.ocr}>{modelConfig.instanceLocation}</h3>
                      </Grid>
               
                <Spacer height="20px"/>
              </Grid>
            </Box>
    </div>
  );
};

