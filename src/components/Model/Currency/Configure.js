import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import s from '../../../styles/styles.module.css'
import Cogs from '../../../assets/animations/cogs'
import {Box, Grid, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Footer from '../../Common/Footer'



class CurrencyConfigure extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideProvision: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideProvision":
        this.setState({ showHideProvision: !this.state.showHideProvision });
        break;
      
    }
  }
  

  render() {
    
    const { showHideProvision } = this.state;
    return (
      <div>
         <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                    <h1 className={s.header}>Australian Currency</h1>
                    <p className={s.subheader}>CONFIGURATION</p>
                    <Spacer height="25px"/>
                </Grid>
            </Grid>
            <Spacer height="50px"/>
        </Box>
        <Box>
        <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                    <Button  variant="outlined" color="primary" size="large" onClick={() => this.hideComponent("showHideProvision")}>
                        <span className={s.ctabutton}>Provision</span>
                    </Button>
                    <Spacer height="50px"/>
                    <Grid container alignItems="center" justify="center">
                    <Grid item sm={2} md={2}>
                    <div> {showHideProvision && <Cogs />} </div>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        <Spacer height="50px"/>
        <Footer/>
        </div>
    );
  }
}

export default CurrencyConfigure