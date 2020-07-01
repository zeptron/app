import React from "react";
import Spacer from "react-spacer";
import { Box, Button, Grid } from "@material-ui/core";
import s from "../../../styles/styles.module.css";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Instance({ modelConfig }) {
  const [state, setState] = React.useState({
    Started: modelConfig.instanceState,
  });

  const instanceSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: "center" }}>
          {modelConfig.instanceName}
        </h1>
      </Box>

      <Box>
        <Spacer height="100px" />
        <Grid container alignItems="center" justify="center">
          <Grid item md={8}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={state.Started}
                    onChange={instanceSwitch}
                    name="Started"
                  />
                }
                label="Instance Switch"
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
                Analytics
              </Button>
            </FormGroup>

            <Spacer height="50px" />
            <div className="devnotes">
              <h3>
                {"<"}DeveloperNotes{">"}
              </h3>
              <p>Switch invokes Lambda to Start/Stop {"{EC2instanceID}"}.</p>

              <p>
                When starting / stopping, show {"<cogs/>"} component from
                src/app/animations/cogs.js until the Lambda returns success
              </p>

              <p>
                Run button invokes Lambda to start model. Pass{" "}
                {"{modelConfigId}"} to Lambda
              </p>

              <p>If switch is off, hide run button</p>

              <h3>
                {"</"}DeveloperNotes{">"}
              </h3>
            </div>
            <h2>Live Stream</h2>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <img
                alt="stream"
                src="https://via.placeholder.com/640x460.png?text=Live+Stream"
              />
            </Grid>
            <p>Comes from {modelConfig.publicIP}</p>
          </Grid>
        </Grid>
        <Spacer height="100px" />
      </Box>
    </div>
  );
}
