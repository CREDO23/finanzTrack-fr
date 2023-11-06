import type { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

function useAxiosAction<S>(action: (actionArg: any) => Promise<AxiosResponse<IAPIResponse<S>>>): [
  (arg: [actionArg: any]) => Promise<{
    data: AxiosResponse<IAPIResponse<S>> | null;
    loading: boolean;
    error: AxiosError<IAPIResponse<null>> | null;
  }>,
  { loading: boolean; data: AxiosResponse<IAPIResponse<S>> | null; error: AxiosError<IAPIResponse<null>> | null }
] {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError<IAPIResponse<null>> | null>(null);
  const [data, setData] = useState<AxiosResponse<IAPIResponse<S>> | null>(null);

  const performAction = async (
    arg: Parameters<typeof action>
  ): Promise<{
    data: AxiosResponse<IAPIResponse<S>> | null;
    loading: boolean;
    error: AxiosError<IAPIResponse<null>> | null;
  }> => {
    try {
      // Reset the states
      setLoading(true);
      setData(null);
      setError(null);

      // Perform the action
      const response = await action(arg);
      setData(response);

      return { data, loading: false, error: null };
    } catch (error) {
      setError(error as AxiosError<IAPIResponse<null>>);

      return { data: null, loading: false, error: error as AxiosError<IAPIResponse<null>> };
    } finally {
      setLoading(false);
    }
  };

  const state = { loading, data, error };

  return [performAction, state];
}

export default useAxiosAction;
