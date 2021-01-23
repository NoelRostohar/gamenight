import {
  AddGameAction,
  RemoveGameAction,
  ChangeDateAction,
  ChangePlaceAction,
  ChangeTimeAction,
  GameNightActions,
  GameNightActionTypes,
} from './types';

export const changePlace = ({ place }: ChangePlaceAction): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangePlace,
    place,
  };
};

export const addGame = ({ game }: AddGameAction): GameNightActions => {
  return {
    type: GameNightActionTypes.AddGame,
    game,
  };
};
export const removeGame = ({ _id }: RemoveGameAction): GameNightActions => {
  return {
    type: GameNightActionTypes.RemoveGame,
    _id,
  };
};

export const changeDate = ({ date }: ChangeDateAction): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangeDate,
    date,
  };
};

export const changeTime = ({ time }: ChangeTimeAction): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangeTime,
    time,
  };
};
