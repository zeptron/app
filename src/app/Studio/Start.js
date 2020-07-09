import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Spacer from "react-spacer";
import { Box, Button, Grid } from "@material-ui/core";
import s from "../../styles/styles.module.css";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions";

import * as queries from '../../graphql/queries';
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

  const currentModel = useSelector((state) => state.currentModel.model);

  const classes = useStyles();
  const modelName = currentModel.name;

  const dispatch = useDispatch();

  const initialFormData = Object.freeze({
    instanceName: "",
    instanceLocation: "",
    instancePod: "",
    modelID: currentModel.id,
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    dispatch(allActions.modelConfigActions.setModelConfig(formData));
  };



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
          <Link
            to={`/studio/actions/${currentModel.id}`}
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
