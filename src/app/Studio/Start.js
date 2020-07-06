import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Spacer from "react-spacer";
import { Box, Button, Grid } from "@material-ui/core";
import s from "../../styles/styles.module.css";
import TextField from "@material-ui/core/TextField";

import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Start() {
  const currentModel = useSelector((state) => state.currentModel.model);

  const classes = useStyles();
  const modelName = currentModel.name;

  const dispatch = useDispatch();

  const initialFormData = Object.freeze({
    instanceName: "",
    instanceLocation: "",
    instancePod: "",
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(allActions.modelConfigActions.setModelConfig(formData));
  };

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: "center" }}>
          {modelName}
        </h1>
        <p className={s.subheader}>Create New Instance</p>
      </Box>
      <Spacer height="100px" />
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label="Instance Name"
              defaultValue="My Model"
              variant="outlined"
              name="instanceName"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Location"
              defaultValue="City Near Me"
              variant="outlined"
              name="instanceLocation"
              onChange={handleChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Location"
              defaultValue="Place Near Me"
              variant="outlined"
              name="instancePod"
              onChange={handleChange}
            />
          </form>
        </Grid>
        <Spacer height="25px" />
        <Grid item xs={12}>
          <Button
            href="/studio/actions"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </Grid>
      </Grid>
      <Spacer height="100px" />
    </div>
  );
}
