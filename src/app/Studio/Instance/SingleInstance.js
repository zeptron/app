import React from "react";

import Spacer from "react-spacer";
import { Box, Button, Grid } from "@material-ui/core";
import s from "../../../styles/styles.module.css";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import AWS from 'aws-sdk';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const SingleInstance = ({ modelConfig }) => {
  const [state, setState] = React.useState({
    Started: modelConfig.instanceState,
  });

  const instanceSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const notify = () => toast("Wow so easy !");


  
  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: "center" }}>
          {modelConfig.instanceName}
        </h1>
      </Box>

      <Box>
      <button onClick={notify}>Notify !</button>
        <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        <Spacer height="100px" />
        <Grid container alignItems="center" justify="center">
          <Grid item md={8}>

            <Grid container alignItems="center" justify="center"> 
            <Grid item md={6} xs={12}>
              <Box p={2}>
            <FormGroup row>
            <FormControlLabel
                control={
                  <Switch
                    checked={state.Started}
                    onChange={instanceSwitch}
                    name="Started"
                  />
                }
                label="Power"
              />
              <Button variant="contained" color="secondary" size="large">
                Run
              </Button>
              <Button
                href="/studio/{id}/analytics"
                variant="contained"
                color="primary"
                size="large"
              >
                Analyse
              </Button>
  
            </FormGroup>
            </Box>
            
            </Grid>
            </Grid>

            <Spacer height="50px" />
            
            <h2>Live Stream</h2>
            <Grid container alignItems="center" justify="center" >
              <img
                alt="stream"
                src="https://via.placeholder.com/640x460.png?text=Live+Stream"
                style={{maxWidth: '90%'}}
              />
            </Grid>
            <p>Comes from {modelConfig.publicIP}</p>
          </Grid>
        </Grid>
        <Spacer height="100px" />
      </Box>
    </div>
  );
};
