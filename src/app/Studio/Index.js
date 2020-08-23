import React, { useEffect, useState } from "react";
import Spacer from "react-spacer";
import { Box, Grid } from "@material-ui/core";
import s from "../../styles/styles.module.css";

import { API, Auth, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";

import ModelSettings from "./ModelSettings";
import NewModelConfig from "./NewModelConfig";

export default function Studio() {
  const [configModels, setConfigModels] = useState([]);

  async function fetchConfigModelsAPI(id) {
    //id = id.split(":")[1];
    try {
      const rconfigs = await API.graphql(
        graphqlOperation(queries.listModelConfigs, {
          filter: {
            userID: {
              eq: id,
            },
          },
        })
      );

      const {
        data: {
          listModelConfigs: { items },
        },
      } = rconfigs;
      console.log("Configs: ", items);
      setConfigModels(items);
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  useEffect(() => {
    document.title = `Zeptron - Studio`
  }, [])

  useEffect(() => {
    Auth.currentUserInfo({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        console.log("Current user id: ", user.username);
        fetchConfigModelsAPI(user.username);
      })
      .catch((err) => console.log(err));
  }, []);

  let output = '';

  if (configModels.length !== 0) {
    output = configModels.map((configModel) => (
      <ModelSettings key={configModel.id} modelConfig={configModel} />
    ));
  }

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
      <Spacer height="80px"/>
        <h1 className={`${s.header} ${s.center}`}>
          Studio
        </h1>
      </Box>
      <Box>
        <Spacer height="100px" />
        <Grid container justify="center">
        <NewModelConfig />
        {output}
        </Grid>
        <Spacer height="100px" />
      </Box>
    </div>
  );
}
