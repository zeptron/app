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
    });
  }, []);

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
  }, [instanceType, fileUrl]);

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
                    defaultValue="My Model"
                    variant="outlined"
                    value={instanceName}
                    onChange={setInstanceName}
                  />
                  <TextField
                    required
                    label="Location"
                    defaultValue="City Near Me"
                    variant="outlined"
                    value={instanceLocation}
                    onChange={setInstanceLocation}
                  />
                  <TextField
                    required
                    label="Pod"
                    defaultValue="Place Near Me"
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
                  disabled={disabledProvisionButton}
                  onClick={onSubmit}
                >
                  Provision
                </Button>
              </Grid>
            </Grid>

            <Spacer height='100px'/>
          </>
        );
      default:
        return null;
    }
  };

  const setModelConfigQuery = useQuery(mutations.createModelConfig, {
    onSuccess: (data) => {
      console.log(data);

      AWS.CloudFormation.createStack({
        StackName: 'test',
        TemplateBody: template,
      }, (err, data) => {
        console.error(err);
        console.log(data);
      });
    },
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
        countClasses,
        notify,
        notifyClasses,
        fromFile: instanceType === 'file',
        fileUrl,
        instanceState: false,
      }
    });
  };
  console.log(setModelConfigQuery);

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: 'center' }}>
          {modelQuery.data?.getModel?.name ?? '...'}
        </h1>
        <p className={s.subheader}>
          {subheaders[step]}
        </p>
      </Box>
      {renderForm()}
    </div>
  );
};

export default ConfigurationSteps;