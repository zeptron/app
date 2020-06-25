import React from 'react'
import styled from 'styled-components'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid, Paper} from '@material-ui/core'
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

//This should come from the Classes table for classess associated with modelID
//The value of classes is their ID number, e.g. 1 Person,

const names = [
    'Person',
    'Car',
    'Bicycle',
    'Truck',
    'Dog',
    'Cat'
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  export default function Library() {
    const classes = useStyles();
    const theme = useTheme();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    
      const handleCountChange = (event) => {
        setPersonName(event.target.value);
      };

      const handleCountChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setPersonName(value);
      };

      const handleNotifyChange = (event) => {
        setClassName(event.target.value);
      };
      
      const handleNotifyChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        setClassName(value);
      };
      
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

      const [className, setClassName] = React.useState([]);
      const [personName, setPersonName] = React.useState([]);
    
   return (
            <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <h1  className={s.header} style={{textAlign: 'center'}}>
                    ModelName            
                </h1>
                <p className={s.subheader}>Configure Actions</p>
                </Box>
                <Spacer height="100px"/>

               
                        
                        <Grid container alignItems="center" justify="center">
                        <Grid item sm={8} xs={12}>
                        <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
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
          value={personName}
          onChange={handleCountChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
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
            onChange={handleChange}
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
                <Chip key={value} label={value} className={classes.chip} />
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
        <Spacer height="25px" />
        <Grid item xs={12}>
        <Button to="/studio/provision" variant="contained" color="primary" size="large">
            Next
        </Button>
        </Grid>
        </Grid>
        
        
                        
                
                
                
                <Spacer height="100px"/>
            
            </div>

   )
   }