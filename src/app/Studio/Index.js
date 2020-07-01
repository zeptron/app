import React, { useEffect, useState } from "react";
import Spacer from "react-spacer";
import { Box, Grid } from "@material-ui/core";
import s from "../../styles/styles.module.css";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import { Auth } from "aws-amplify";
import ModelSettings from "./ModelSettings";

export default function Studio() {
  const [configModels, setConfigModels] = useState([]);

  async function fetchConfigModelsAPI(id) {
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
    Auth.currentUserInfo({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        fetchConfigModelsAPI(user.id);
      })
      .catch((err) => console.log(err));
  }, []);

  let output = <p>No model configs</p>;

  if (configModels.length !== 0) {
    output = configModels.map((configModel) => (
      <ModelSettings key={configModel.id} model={configModel} />
    ));
  }

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: "center" }}>
          Vision Studio
        </h1>
      </Box>
      <Box>
        <Spacer height="50px" />
        <Grid item></Grid>
        <Spacer height="50px" />
        {output}

        <Spacer height="100px" />
      </Box>
    </div>
  );
}
