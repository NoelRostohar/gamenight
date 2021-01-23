import {
  ChangeGameAction,
  ChangeDateAction,
  ChangePlaceAction,
  ChangeTimeAction,
  GameNightActions,
} from './types';

export const changePlace = ({
  type,
  payload,
}: ChangePlaceAction): GameNightActions => {
  return {
    type,
    payload,
  };
};

export const changeGame = ({
  type,
  payload,
}: ChangeGameAction): GameNightActions => {
  return {
    type,
    payload,
  };
};

export const changeDate = ({
  type,
  payload,
}: ChangeDateAction): GameNightActions => {
  return {
    type,
    payload,
  };
};

export const changeTime = ({
  type,
  payload,
}: ChangeTimeAction): GameNightActions => {
  return {
    type,
    payload,
  };
};
