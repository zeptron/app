import React, { useState, useEffect } from "react";
import Spacer from "react-spacer";
import { Box, Grid } from "@material-ui/core";
import s from "../../styles/styles.module.css";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";

import ModelCard from "./ModelCard";

export default function Library() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchLibraryModelsAPI() {
      try {
        const rdata = await API.graphql(graphqlOperation(queries.listModels));
        const {
          data: {
            listModels: { items },
          },
        } = rdata;
        console.log("Models: ", items);
        setModels(items);
      } catch (err) {
        console.log("error: ", err);
      }
    }

    fetchLibraryModelsAPI();
  }, []);

  let output = <p>Loading...</p>;

  if (models.length !== 0) {
    output = models.map((model) => <ModelCard key={model.id} model={model} />);
  }

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: "center" }}>
          Model Library
        </h1>
      </Box>

      <Spacer height="100px" />
      <Grid container alignItems="center" justify="center">
        {output}
      </Grid>
      <Spacer height="100px" />
    </div>
  );
}
