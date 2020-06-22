import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import s from '../../../styles/styles.module.css'
import Cogs from '../../../assets/animations/cogs'
import {Box, Grid, Button} from '@material-ui/core'
import Spacer from 'react-spacer'
import Ip from './Ip'
import Footer from '../../Common/Footer'


class CurrencyConfigure extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideProvision: false,
      showHideIP: false,
      count: 0
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  
  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ showHideProvision: false });
      this.setState({ showHideIP: true });
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
      
    }
  }
  

  render() {
    
    const { showHideProvision, showHideIP } = this.state;
    return (
      <div>
         <Box bgcolor="primary.dark" color="primary.contrastText">
            <Spacer height="50px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} sm={10} xs={12}>
                    <h1 className={s.header}>Australian Currency</h1>
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
                    <Button  variant="outlined" color="primary" size="large" onClick={() => this.hideComponent("showHideProvision")}>
                        <span className={s.ctabutton}>Provision</span>
                    </Button>
                    <Spacer height="50px"/>
                    <Grid container alignItems="center" justify="center">
                    <Grid item sm={2} md={2}>
                    <div> {showHideProvision && <Cogs />} 
                    {showHideIP && <Ip />}
                    </div>
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