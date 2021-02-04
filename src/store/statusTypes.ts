import { FetchStatus } from '../types';

export enum StateStatusTypes {
  StartFetching = 'StartFetching',
  FetchSuccess = 'FetchSuccess',
  FetchError = 'FetchError',
}

export interface StateStatus {
  loading: boolean;
  error: string;
  status: keyof typeof FetchStatus;
}

export interface StartFetchingAction {
  type: StateStatusTypes.StartFetching;
}

export interface FetchSuccessAction {
  type: StateStatusTypes.FetchSuccess;
}

export interface FetchErrorAction {
  type: StateStatusTypes.FetchError;
  error: string;
}

export type StateStatusActions =
  | StartFetchingAction
  | FetchSuccessAction
  | FetchErrorAction;
