import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Spacer from "react-spacer";
import { Box, Button, Grid } from "@material-ui/core";
import s from "../../styles/styles.module.css";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";
import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

import useQuery from '../../graphql/useQuery';

import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
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

  const modelName = modelQuery;

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
    setClassNames(event.target.value);
  };

  const [classNames, setClassNames] = React.useState([]);

  //
  // Notify classes

  const handleNotifyChange = (event) => {
    setClassName(event.target.value);
  };

  const [className, setClassName] = React.useState([]);

  //
  // Line position drop down

  const [position, setPosition] = React.useState("");
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
        <h1 className={s.header} style={{ textAlign: "center" }}>
          {modelQuery.data?.getModel?.name ?? '...'}
        </h1>
        <p className={s.subheader}>Configure Actions</p>
      </Box>

      <Spacer height="100px" />

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
                input={<Input id="select-multiple-chip" />}
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
                  classesQuery.data?.listClasss.items.map((currentClass) => (
                    <MenuItem
                      key={currentClass.id}
                      value={currentClass.name}
                      style={getStyles(currentClass.name, classNames, theme)}
                    >
                      {currentClass.name}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Line Position
              </InputLabel>
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
                input={<Input id="select-multiple-chip" />}
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
                      style={getStyles(currentClass.name, classNames, theme)}
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
          <Spacer height="50px" />
          <Link
            to={`/studio/provision/${match.params.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="primary" size="large">
              Next
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Spacer height="100px" />
    </div>
  );
}
