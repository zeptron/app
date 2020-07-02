import React, { useEffect, useState } from "react";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import { SingleInstance } from "./SingleInstance";

export default function Instance({ match }) {
  const [modelConfig, setModelConfig] = useState();

  useEffect(() => {
    async function fetchLibrarySingleModelAPI() {
      try {
        const rconfig = await API.graphql(
          graphqlOperation(queries.getModelConfig, { id: match.params.id })
        );

        const {
          data: { getModelConfig: item },
        } = rconfig;

        console.log("Model config: ", item);
        setModelConfig(item);
      } catch (err) {
        console.log("error: ", err);
      }
    }

    fetchLibrarySingleModelAPI();
  }, []);

  let output;

  if (!modelConfig) {
    output = <p>Loading...</p>;
  } else {
    output = <SingleInstance modelConfig={modelConfig} />;
  }

  return <div>{output}</div>;
}
