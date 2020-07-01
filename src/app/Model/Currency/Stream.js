import React, { Component, useEffect } from "react";
import { render } from "react-dom";
import s from "../../../styles/styles.module.css";
import { Box, Grid, Button } from "@material-ui/core";
import Spacer from "react-spacer";
import Ip from "./ProvisionHelper";

class Stream extends Component {
  render() {
    return (
      <div>
        <Box bgcolor="primary.dark" color="primary.contrastText">
          <Spacer height="50px" />
          <Grid container alignItems="center" justify="center">
            <Grid item md={8} sm={10} xs={12}>
              <h1 className={s.header}>Australian Currency</h1>
              <p className={s.subheader}>MODEL STREAM</p>
              <Spacer height="25px" />
            </Grid>
          </Grid>
          <Spacer height="50px" />
        </Box>
        <Box>
          <Spacer height="50px" />
          <Grid container alignItems="center" justify="center">
            <Grid item md={8} sm={10} xs={12}>
              <img src="http://13.236.132.4:5000/video_feed/camera/0" />
            </Grid>
          </Grid>
        </Box>
        <Spacer height="50px" />
      </div>
    );
  }
}

export default Stream;
