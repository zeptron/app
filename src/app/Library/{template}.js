import React, { useState, useEffect } from "react";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";

import ModelDetails from "./ModelDetails";

function createData(name, number) {
  return { name, number };
}

const createRows = (data) => {
  let rows = [];

  data.forEach((element) => {
    rows.push(createData(element.name, element.number));
  });

  return rows;
};

export default function Currency({ match }) {
  const [model, setModel] = useState();
  const [modelClasses, setModelClasses] = useState();

  useEffect(() => {
    async function fetchLibrarySingleModelAPI() {
      try {
        const rmodel = await API.graphql(
          graphqlOperation(queries.getModel, { id: match.params.id })
        );

        const rclasses = await API.graphql(
          graphqlOperation(queries.listClasss, {
            filter: {
              modelID: {
                eq: match.params.id,
              },
            },
          })
        );

        const {
          data: {
            listClasss: { items },
          },
        } = rclasses;

        const {
          data: { getModel: item },
        } = rmodel;
        console.log("Model: ", item);
        console.log("Classes: ", items);
        setModel(item);
        setModelClasses(items);
      } catch (err) {
        console.log("error: ", err);
      }
    }

    fetchLibrarySingleModelAPI();
  }, []);

  let rows = [];

  if (modelClasses == null) {
    rows = [];
  } else {
    rows = createRows(modelClasses);
  }

  let output;

  if (!model) {
    output = <p>Loading...</p>;
  } else {
    output = <ModelDetails model={model} rows={rows} />;
  }

  return <div>{output}</div>;
}
