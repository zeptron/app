import {useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify';

export default function useQuery(
  query,
  callbacks,
) {
  const [state, setState] = useState({
    loading: false,
    success: false,
    fail: false,
    data: null,
    error: null,
  });

  const fetch = async (...args) => {
    try {
      // eslint-disable-next-line
      callbacks?.onStart?.();

      setState({
        ...state,
        loading: true,
        success: false,
        fail: false,
        data: null,
        error: null,
      });

      const response = await API.graphql(graphqlOperation(query, ...args));

      // eslint-disable-next-line
      callbacks?.onSuccess?.(response);

      setState({
        ...state,
        loading: false,
        success: true,
        data: response.data,
      });
    } catch (err) {
      // eslint-disable-next-line
      callbacks?.onError?.(err);

      setState({
        ...state,
        loading: false,
        fail: true,
        error: err,
      });
    } finally {
      // eslint-disable-next-line
      callbacks?.onComplete?.();
    }
  };

  return {
    ...state,
    fetch,
  };
}
