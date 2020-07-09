import React, { useEffect } from 'react';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { makeStyles } from "@material-ui/core/styles";
import Spacer from "react-spacer";
import { Box, Button, Grid } from "@material-ui/core";
import s from "../../styles/styles.module.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import useQuery from '../../graphql/useQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Start({ match }) {
  const modelQuery = useQuery(queries.getModel);

  useEffect(() => {
    modelQuery.fetch({ id: match.params.id });
  }, []);

  const classes = useStyles();

  const dispatch = useDispatch();

  const initialFormData = Object.freeze({
    instanceName: "",
    instanceLocation: "",
    instancePod: "",
    modelID: match.params.id,
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    await createModelConfigWithName(e);
    // dispatch(allActions.modelConfigActions.setModelConfig(formData));
  };

  const createModelConfigWithName = async (e) => {
    const user = await Auth.currentUserInfo({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    });
    console.log(user);
    // const result = await API.graphql(graphqlOperation(mutations.createModelConfig, {
    //   input: {
    //     userID: user.username,
    //     modelID: match.params.id,
    //     instanceName: formData.instanceName,
    //     instanceLocation: formData.instanceLocation,
    //     instancePod: formData.instancePod,
    //     count: false,
    //     notify: false,
    //     fromFile: false,
    //     instanceState: false,
    //   }
    // }));
    // console.log(result);
  }

  console.log(formData);

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: 'center' }}>
          {modelQuery.data?.getModel?.name ?? '...'}
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
              label="Pod"
              defaultValue="Place Near Me"
              variant="outlined"
              name="instancePod"
              onChange={handleChange}
            />
          </form>
        </Grid>
        <Spacer height="25px" />
        <Grid item xs={12}>
          <Link
            to={`/studio/actions/${match.params.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              <span>Next</span>
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Spacer height="100px" />
    </div>
  );
}
