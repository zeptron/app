import React, { useEffect, useState } from "react";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../../graphql/queries";
import { Auth } from "aws-amplify";
import { SingleInstance } from "./SingleInstance";

export default function Instance({ match }) {
  const [modelConfig, setModelConfig] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchLibrarySingleModelAPI(userId, id) {
    try {
      const rconfig = await API.graphql(
        graphqlOperation(queries.listModelConfigs, {
          filter: {
            userID: {
              eq: userId,
            },
            id: {
              eq: id,
            },
          },
        })
      );
      const {
        data: {
          listModelConfigs: { items },
        },
      } = rconfig;

      console.log("Model config: ", items[0]);
      setModelConfig(items[0]);
      setIsLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  useEffect(() => {
    Auth.currentUserInfo({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => {
        console.log("Current user id: ", user.username);
        fetchLibrarySingleModelAPI(user.username, match.params.id);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(modelConfig);
  let output;

  if (!modelConfig && isLoading === false) {
    output = <p>Not found</p>;
  } else if (!modelConfig && isLoading === true) {
    output = <p>Loading...</p>;
  } else {
    output = <SingleInstance modelConfig={modelConfig} />;
  }

  return <div>{output}</div>;
}
