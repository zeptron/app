import React from "react";
import Spacer from "react-spacer";
import { Box, Button, Grid } from "@material-ui/core";
import s from "../../../styles/styles.module.css";

// Data from GraphQL

const InstanceName = "InstanceName";

export default function Analytics() {
  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: "center" }}>
          {InstanceName}
        </h1>
      </Box>

      <Box>
        <Spacer height="100px" />
        <Grid container alignItems="center" justify="center">
          <Grid item md={8}>
            <Button
              href="/studio/{id}/"
              variant="contained"
              color="primary"
              size="large"
            >
              Video
            </Button>
            <Button variant="contained" color="secondary" size="large">
              Stop
            </Button>
            <Spacer height="50px" />
            <h2>Charts</h2>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <img
                alt="stream"
                src="https://via.placeholder.com/640x460.png?text=Live+Stream"
              />
            </Grid>
          </Grid>
        </Grid>
        <Spacer height="100px" />
      </Box>
    </div>
  );
}
