import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import s from '../../styles/styles.module.css'
import Cogs from '../animations/cogs'
import { makeStyles } from '@material-ui/core/styles';

import {Box, Grid, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Success from './Components/ProvisionHelper'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';




class Provision extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideProvision: false,
      showHideIP: false,
      showHideButton: true,
      count: 0
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ showHideProvision: false });
      this.setState({ showHideIP: true });
      this.setState({ showHideButton: false });
    }, 34000);
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideProvision":
        this.setState({ showHideProvision: !this.state.showHideProvision });
        break;
        case "showHideIP":
            this.setState({ showHideIP: !this.state.showHideIP });
            break;
        case "showHideButton":
            this.setState({ showHideButton: !this.state.showHideButton });
            break;
      
    }
  }
  

  render() {

    const classes = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));
    
    const { showHideProvision, showHideIP, showHideButton } = this.state;
    return (
      <div>
         <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                    <h1 className={s.header}>`'ModelName'</h1>
                    <p className={s.subheader}>MODEL CONFIGURATION</p>
                    <Spacer height="25px"/>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        <Box>
        <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                {showHideButton && 
                  <div>
                    <Grid container alignItems="center" justify="center">
                      

                    <Grid item xs={12}>
                    <FormControl component="fieldset">
      <FormLabel component="legend">Instance Type</FormLabel>
      <RadioGroup aria-label="type" name="type1" >
        <FormControlLabel value="live" control={<Radio />} label="Live" />
        <FormControlLabel value="vile" control={<Radio />} label="From File" />
      </RadioGroup>
    </FormControl>
    </Grid>
    <Spacer height="50px"/>
    <Grid item xs={12}>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField
          required
          id="outlined-required"
          label="Location"
          defaultValue="Place Near Me"
          variant="outlined"
        />
        </form>
    </Grid>
    <Spacer height="50px"/>
  
    <Grid item xs={12}>
                    <Button  variant="outlined" color="primary" size="large" onClick={() => this.hideComponent("showHideProvision")}>
                        <span className={s.ctabutton}>Provision</span>
                    </Button>
                    </Grid>
                  
                    </Grid>
                    
                    </div>
                    }
                    <Spacer height="50px"/>
                    <Grid container alignItems="center" justify="center">
                        <Grid item sm={8} md={4}>
                        {showHideIP && <Success />}
                        </Grid>
                        </Grid>
                        <Grid container alignItems="center" justify="center">
                    <Grid item sm={2} md={2}>
                    <div> {showHideProvision && <Cogs />} 
                    </div>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Spacer height="50px"/>
        </div>
    );
  }
}

export default Provision