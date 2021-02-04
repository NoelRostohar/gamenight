import { StateStatusTypes, StateStatusActions } from './statusTypes';

export const startFetching = (): StateStatusActions => {
  return {
    type: StateStatusTypes.StartFetching,
  };
};

export const fetchSuccess = (): StateStatusActions => {
  return {
    type: StateStatusTypes.FetchSuccess,
  };
};

export const fetchError = (error: string): StateStatusActions => {
  return {
    type: StateStatusTypes.FetchError,
    error,
  };
};
