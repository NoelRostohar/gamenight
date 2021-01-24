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

export const changeDate = (date: Date): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangeDate,
    date,
  };
};

export const changeTime = (time: Date): GameNightActions => {
  return {
    type: GameNightActionTypes.ChangeTime,
    time,
  };
};

export const clearGameNight = (): GameNightActions => {
  return {
    type: GameNightActionTypes.ClearGameNight,
  };
};
