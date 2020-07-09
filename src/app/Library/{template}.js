import React, { useEffect } from 'react';

import useQuery from '../../graphql/useQuery';
import * as queries from '../../graphql/queries';

import ModelDetails from './ModelDetails';

export default function Currency({ match }) {
  const modelQuery = useQuery(queries.getModel);
  const classesQuery = useQuery(queries.listClasss);

  useEffect(() => {
    modelQuery.fetch({ id: match.params.id });
    classesQuery.fetch({
      filter: {
        modelID: {
          eq: match.params.id,
        },
      },
    });
  }, []);

  return (
    <div>
      {(modelQuery.loading || classesQuery.loading || !modelQuery.data || !classesQuery.data)
        ? (
          <p>Loading...</p>
        )
        : (
          <ModelDetails
            model={modelQuery.data?.getModel}
            rows={classesQuery?.data?.listClasss?.items ?? []}
          />
        )
      }
    </div>
  );
}
