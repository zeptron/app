import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer';
import { Box, Button, Grid } from '@material-ui/core';
import s from '../../styles/styles.module.css';
import TextField from '@material-ui/core/TextField';
import { API, graphqlOperation } from 'aws-amplify';

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

  const classes = useStyles();

  useEffect(() => {
    modelQuery.fetch({ id: match.params.id });
  }, []);

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: 'center' }}>
          {modelQuery.data?.getModel?.name ?? '...'}
        </h1>
        <p className={s.subheader}>Create New Instance</p>
      </Box>

      <Spacer height="100px"/>

      <Grid container alignItems="center" justify="center">
        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id="outlined-required"
              label="Instance Name"
              defaultValue="My Model"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Location"
              defaultValue="City Near Me"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Location"
              defaultValue="Place Near Me"
              variant="outlined"
            />
          </form>
        </Grid>
        <Spacer height="25px"/>
        <Grid item xs={12}>
          <Button
            href={`/studio/actions/${match.params.id}`}
            variant="contained"
            color="primary"
            size="large"
          >
            Next
          </Button>
        </Grid>
      </Grid>

      <Spacer height="100px"/>
    </div>
  );
}
