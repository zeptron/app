import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import { Box, Button, Grid } from '@material-ui/core'
import s from '../../styles/styles.module.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import Chip from '@material-ui/core/Chip';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';


const useStyles = makeStyles((theme) => ({
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

// Data from GraphQL
// This should come from the Classes table for classes associated with modelID
// The value of classes is their associated number in the table, e.g. 1 Person,

const names = [
  'Person',
  'Car',
  'Bicycle',
  'Truck',
  'Dog',
  'Cat'
];

function getStyles(name, classNames, theme) {
  return {
    fontWeight:
      classNames.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Actions({ match }) {
  const [model, setModel] = useState();

  const [modelConfig, setModelConfig] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchLibrarySingleModelAPI(userId, id) {
    try {
      const rconfig = await API.graphql(
        graphqlOperation(queries.listModelConfigs, {
          filter: {
            userID: {
              eq: userId,
            },
            id: {
              eq: id,
            },
          },
        })
      );
      const {
        data: {
          listModelConfigs: { items },
        },
      } = rconfig;

      console.log('Model config: ', items[0]);
      setModelConfig(items[0]);
      setIsLoading(false);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  async function fetchModel() {
    try {
      const modelInfo = await API.graphql(
        graphqlOperation(queries.getModel, { id: match.params.id })
      );

      setModel(modelInfo.data.getModel);
    } catch (err) {
      console.log('error: ', err);
    }
  }

  useEffect(() => {
    Auth.currentUserInfo({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        console.log('Current user id: ', user.username);
        fetchLibrarySingleModelAPI(user.username, match.params.id);
        fetchModel();
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(model);
  const classes = useStyles();
  const theme = useTheme();

  //
  // Count & Notify switches

  const [state, setState] = React.useState({
    countSwitched: true,
    notifySwitched: true,
  });

  const handleSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //
  // Count classes

  const handleCountSwitch = (event) => {
    setclassNames(event.target.value);
  };


  const [classNames, setclassNames] = React.useState([]);

  //
  // Notify classes

  const handleNotifyChange = (event) => {
    setClassName(event.target.value);
  };


  const [className, setClassName] = React.useState([]);

  //
  // Line position drop down

  const [position, setPosition] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>

      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: 'center' }}>
          {model?.name ?? '...'}
        </h1>
        <p className={s.subheader}>Configure Actions</p>
      </Box>

      <Spacer height="100px"/>

      <Grid container alignItems="center" justify="center">
        <Grid item md={4} sm={8} xs={12}>

          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={state.checkedA}
                  onChange={handleSwitch}
                  name="checkedB"
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
                value={classNames}
                onChange={handleCountSwitch}
                input={<Input id="select-multiple-chip"/>}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} className={classes.chip}/>
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, classNames, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Line Position</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={position}
                onChange={handlePositionChange}
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
                  checked={state.checkedB}
                  onChange={handleSwitch}
                  name="checkedB"
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
                value={className}
                onChange={handleNotifyChange}
                input={<Input id="select-multiple-chip"/>}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} className={classes.chip}/>
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, className, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </FormGroup>
        </Grid>


        <Grid item xs={12}>
          <Spacer height="50px"/>
          <Button
            href={`/studio/provision/${match.params.id}`}
            variant="contained"
            color="primary"
            size="large"
          >
            Next
          </Button>
        </Grid>

      </Grid>

      <Spacer height="100px"/>

    </div>

  )
}
