import React, { useContext, useEffect } from 'react';

import * as queries from "../../../graphql/queries";
import useQuery from '../../../graphql/useQuery';
import UserContext from '../../../UserContext';
import Loader from '../Components/Loader'
import { SingleInstance } from "./SingleInstance";

export default function Instance({ match }) {
  const { user } = useContext(UserContext);

  const modelQuery = useQuery(queries.listModelConfigs);

  useEffect(() => {
    modelQuery.fetch({
      filter: {
        userID: {
          eq: user.username,
        },
        id: {
          eq: match.params.id,
        },
      },
    });
  }, []);

  if (!modelQuery.data && !modelQuery.loading) {
    return (
      <p>Not found</p>
    );
  }

  if (!modelQuery.data && modelQuery.loading) {
    return (
      <Loader />
    );
  }
  console.log(modelQuery.data?.listModelConfigs?.items?.[0]);

  return (
    <SingleInstance
      modelConfig={modelQuery.data?.listModelConfigs?.items?.[0]}
    />
  );
}
