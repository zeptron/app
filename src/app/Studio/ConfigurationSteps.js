import React, { useContext, useEffect, useMemo, useState } from 'react';
import Spacer from 'react-spacer';
import AWS from 'aws-sdk';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

import useInput from '../../utils/hooks/useInput';
import useQuery from '../../graphql/useQuery';
import useCheckbox from '../../utils/hooks/useCheckbox';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { template } from '../../utils/template';
import UserContext from '../../UserContext';

import Success from './Components/ProvisionHelper';
import Cogs from '../animations/cogs';

import s from '../../styles/styles.module.css';
import { sleep } from '../../utils/sleep';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, classNames, theme) {
  return {
    fontWeight:
      classNames?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ConfigurationSteps = ({ match }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { user } = useContext(UserContext);

  const modelQuery = useQuery(queries.getModel);
  const classesQuery = useQuery(queries.listClasss);

  useEffect(() => {
    modelQuery.fetch({ id: match.params.id });
    classesQuery.fetch({
      filter: {
        modelID: {
          eq: match.params.id,
        },
      },
      limit: 100000,
      nextToken: null,
    });
  }, []);

  const classNumbers = useMemo(() => {
    const numbers = {};
    const items = classesQuery.data?.listClasss.items ?? [];

    items.forEach(({ name, number }) => numbers[name] = number);

    return numbers;
  }, [classesQuery.data?.listClasss.items]);

  const [step, setStep] = useState('start');
  const [instanceName, { setWrap: setInstanceName }] = useInput('');
  const [instanceLocation, { setWrap: setInstanceLocation }] = useInput('');
  const [instancePod, { setWrap: setInstancePod }] = useInput('');
  const [count, { setWrap: setCount }] = useCheckbox(true);
  const [notify, { setWrap: setNotify }] = useCheckbox(true);
  const [countClasses, { setWrap: setCountClasses }] = useInput([]);
  const [notifyClasses, { setWrap: setNotifyClasses }] = useInput([]);
  const [line, { setWrap: setLine }] = useInput('');
  const [instanceType, { setWrap: setInstanceType }] = useInput(null);
  const [fileUrl, { setWrap: setFileUrl }] = useInput('');
  const [loadingStack, setLoadingStack] = useState(false);
  const [success, setSuccess] = useState(false);

  const disabledStartButton = useMemo(() => {
    return !instanceName.length || !instanceLocation.length || !instancePod.length;
  }, [instanceName, instanceLocation, instancePod]);

  const disabledActionsButton = useMemo(() => {
    return !(
      (!count || (count && countClasses.length > 0 && line.length > 0))
      && (!notify || (notify && notifyClasses.length > 0))
    );
  }, [count, countClasses, line, notify, notifyClasses]);

  const disabledProvisionButton = useMemo(() => {
    return !(instanceType === 'live' || (instanceType === 'file' && fileUrl.length > 0));
  }, [instanceType, fileUrl, loadingStack]);

  const subheaders = {
    start: 'Create New Instance',
    actions: 'Configure Actions',
    provision: 'Model Configuration',
  };

  const renderForm = () => {
    switch (step) {
      case 'start':
        return (
          <>
            <Spacer height="100px"/>

            <Grid container alignItems="center" justify="center">
              <Grid item xs={12}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    required
                    label="Instance Name"
                    variant="outlined"
                    value={instanceName}
                    onChange={setInstanceName}
                  />
                  <TextField
                    required
                    label="Location"
                    variant="outlined"
                    value={instanceLocation}
                    onChange={setInstanceLocation}
                  />
                  <TextField
                    required
                    label="Tag"
                    variant="outlined"
                    value={instancePod}
                    onChange={setInstancePod}
                  />
                </form>
              </Grid>
              <Spacer height="25px"/>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setStep('actions')}
                  disabled={disabledStartButton}
                >
                  <span>Next</span>
                </Button>
              </Grid>
            </Grid>

            <Spacer height="100px"/>
          </>
        );
      case 'actions':
        return (
          <>
            <Spacer height="100px"/>

            <Grid container alignItems="center" justify="center">
              <Grid item md={4} sm={8} xs={12}>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={count}
                        onChange={setCount}
                        color="primary"
                      />
                    }
                    label="Count"
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Classes</InputLabel>
                    <Select
                      labelId="demo-mutiple-chip-label"
                      id="demo-mutiple-chip"
                      multiple
                      value={countClasses}
                      onChange={setCountClasses}
                      input={<Input id="select-multiple-chip"/>}
                      renderValue={(selected) => (
                        <div className={classes.chips}>
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {(classesQuery.loading || !classesQuery.data)
                        ? (
                          <p>Loading...</p>
                        )
                        : classesQuery.data?.listClasss.items.map((currentClass) => (
                          <MenuItem
                            key={currentClass.id}
                            value={currentClass.name}
                            style={getStyles(currentClass.name, countClasses, theme)}
                          >
                            {currentClass.name}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">
                      Direction
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      value={line}
                      onChange={setLine}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="horizontal">Horizontal</MenuItem>
                      <MenuItem value="vertical">Vertical</MenuItem>
                    </Select>
                  </FormControl>
                </FormGroup>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notify}
                        onChange={setNotify}
                        color="primary"
                      />
                    }
                    label="Notify"
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-chip-label">Classes</InputLabel>
                    <Select
                      labelId="demo-mutiple-chip-label"
                      id="demo-mutiple-chip"
                      multiple
                      value={notifyClasses}
                      onChange={setNotifyClasses}
                      input={<Input id="select-multiple-chip"/>}
                      renderValue={(selected) => (
                        <div className={classes.chips}>
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              className={classes.chip}
                            />
                          ))}
                        </div>
                      )}
                      MenuProps={MenuProps}
                    >
                      {(classesQuery.loading || !classesQuery.data)
                        ? (
                          <p>Loading...</p>
                        ) :
                        classesQuery?.data?.listClasss.items.map((currentClass) => (
                          <MenuItem
                            key={currentClass.id}
                            value={currentClass.name}
                            style={getStyles(currentClass.name, notifyClasses, theme)}
                          >
                            {currentClass.name}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <Spacer height="50px"/>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setStep('start')}
                >
                  Back
                </Button>
                <div style={{ width: '20px', display: 'inline-flex' }}/>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={disabledActionsButton}
                  onClick={() => setStep('provision')}
                >
                  Next
                </Button>
              </Grid>
            </Grid>

            <Spacer height="100px"/>
          </>
        );
      case 'provision':
        return (
          <>
            <Spacer height="100px"/>

            <Grid container alignItems="center" justify="center">
              {!success
                ? (
                  <>
                    <Grid item xs={12}>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Instance Type</FormLabel>
                        <RadioGroup
                          aria-label="type"
                          value={instanceType}
                          onChange={setInstanceType}
                        >
                          <FormControlLabel value="live" control={<Radio/>} label="Live"/>
                          <FormControlLabel value="file" control={<Radio/>} label="From File"/>
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Spacer height="50px"/>

                    <Grid item xs={12}>
                      <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                          required
                          id="outlined-required"
                          label="Public Amazon S3 Link"
                          variant="outlined"
                          value={fileUrl}
                          onChange={setFileUrl}
                        />
                      </form>
                    </Grid>

                    <Spacer height="50px"/>

                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => setStep('actions')}
                      >
                        Back
                      </Button>
                      <div style={{ width: '20px', display: 'inline-flex' }}/>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        disabled={disabledProvisionButton || loadingStack}
                        onClick={onSubmit}
                      >
                        Provision
                      </Button>
                    </Grid>

                    <Spacer height="50px"/>
                  </>
                )
                : (
                  <Success
                    id={updateModelConfigQuery.data?.updateModelConfig?.id}
                    ip={updateModelConfigQuery.data?.updateModelConfig?.publicIP}
                  />
                )
              }

              {setModelConfigQuery.loading && (
                <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', marginTop: '20px' }}>
                  <Typography align='center'>
                    Saving model configuration...
                  </Typography>
                  <Cogs/>
                </div>
              )}

              {loadingStack && (
                <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', marginTop: '20px' }}>
                  <Typography align='center'>
                    Provisioning resources...
                  </Typography>
                  <Cogs/>
                </div>
              )}
            </Grid>

            <Spacer height='100px'/>
          </>
        );
      default:
        return null;
    }
  };

  const setModelConfigQuery = useQuery(mutations.createModelConfig, {
    onSuccess: async (data) => {
      AWS.config.update({
        region: process.env.REACT_APP_AWS_REGION,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      });

      const AWSCloudFormation = new AWS.CloudFormation();

      setLoadingStack(true);

      const stack = await AWSCloudFormation.createStack({
        StackName: `stack${data?.data?.createModelConfig?.id}`,
        TemplateBody: template,
        Capabilities: [
          `CAPABILITY_IAM`
      ],
        Parameters: [
          {
            ParameterKey: 'tableName',
            ParameterValue: `tableName${data?.data?.createModelConfig?.id}`,
          },
          {
            ParameterKey: 'ami',
            ParameterValue: `${modelQuery.data.getModel?.ami}`,
          },
          {
            ParameterKey: 'instance',
            ParameterValue: `${modelQuery.data.getModel?.instance}`,
          },
        ],
      }).promise();

      let stackDescription = null;

      while (stackDescription === null || stackDescription?.Stacks[0].StackStatus === 'CREATE_IN_PROGRESS') {
        await sleep(5000);

        stackDescription = await AWSCloudFormation.describeStacks({
          StackName: stack.StackId,
        }).promise();
      }

      const publicIP = stackDescription?.Stacks[0].Outputs.find(({ OutputKey }) => OutputKey === 'EC2I2VQQ4PublicIP')?.OutputValue;
      const privateIP = stackDescription?.Stacks[0].Outputs.find(({ OutputKey }) => OutputKey === 'EC2I2VQQ4PrivateIP')?.OutputValue;
      const EC2instanceID = stackDescription?.Stacks[0].Outputs.find(({ OutputKey }) => OutputKey === 'EC2I2VQQ4ID')?.OutputValue;

      updateModelConfigQuery.fetch({
        input: {
          id: data?.data?.createModelConfig?.id,
          publicIP,
          privateIP,
          EC2instanceID,
          instanceState: true,
          tableName: `tableName${data?.data?.createModelConfig?.id}`,
        }
      });
    },
  });

  const updateModelConfigQuery = useQuery(mutations.updateModelConfig, {
    onComplete: () => setLoadingStack(false),
    onSuccess: () => setSuccess(true),
  });

  const onSubmit = async () => {
    setModelConfigQuery.fetch({
      input: {
        userID: user.username,
        modelID: match.params.id,
        instanceName,
        instanceLocation,
        instancePod,
        count,
        countClasses: countClasses.map((item) => classNumbers[item]),
        line,
        notify,
        notifyClasses: notifyClasses.map((item) => classNumbers[item]),
        fromFile: instanceType === 'file',
        fileUrl,
        instanceState: false,
        publicIP: '',
        privateIP: '',
        port: '',
        EC2instanceID: '',
        tableName: '',
      }
    });
  };

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={`${s.header} ${s.center}`}>
          {modelQuery.data?.getModel?.name ?? '...'}
        </h1>
        <p className={`${s.subheader} ${s.center}`}>
          {subheaders[step]}
        </p>
      </Box>
      {renderForm()}
    </div>
  );
};

export default ConfigurationSteps;
