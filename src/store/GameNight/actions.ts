import { GameNightActions, GameNightActionTypes } from './types';

import { GameType, Place } from '../../types';

export const changePlace = (place: Place): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangePlace,
    place,
  };
};

export const addGame = (game: GameType): GameNightActions => {
  return {
    type: GameNightActionTypes.AddGame,
    game,
  };
};
export const removeGame = (_id: string | number): GameNightActions => {
  return {
    type: GameNightActionTypes.RemoveGame,
    _id,
  };
};

export const changeDate = (date: string): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangeDate,
    date,
  };
};

export const changeTime = (time: string): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangeTime,
    time,
  };
};
