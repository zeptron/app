import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import s from '../../../styles/styles.module.css'
import Cogs from '../animations/cogs'
import {Box, Grid, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Ip from './Components/ProvisionHelper'


class CurrencyConfigure extends Component {
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
      this.setState({ displayProvision: false });
      this.setState({ displayIP: true });
      this.setState({ displayButton: false });
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
    case "displayProvision":
        this.setState({ displayProvision: !this.state.displayProvision });
        break;
    case "displayIP":
            this.setState({ displayIP: !this.state.displayIP });
            break;
    case "displayButton":
            this.setState({ displayButton: !this.state.displayButton });
            break;
      
    }
  }
  

  render() {
    
    const { displayProvision, displayIP, displayButton } = this.state;
    return (
      <div>
         <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
    <h1 className={s.header}>``{ModelName}``</h1>
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
                    <Button  variant="outlined" color="primary" size="large" onClick={() => this.hideComponent("showHideProvision")}>
                        <span className={s.ctabutton}>Provision</span>
                    </Button>
                    }
                    <Spacer height="50px"/>
                    <Grid container alignItems="center" justify="center">
                        <Grid item sm={8} md={4}>
                        {showHideIP && <Ip />}
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

export default CurrencyConfigure