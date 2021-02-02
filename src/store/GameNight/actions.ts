import { GamenightActions, GamenightActionTypes } from './types';

import { GameType, Place } from '../../types';

export const changePlace = (place: Place): GamenightActions => {
  return {
    type: GamenightActionTypes.ChangePlace,
    place,
  };
};

export const addGame = (game: GameType): GamenightActions => {
  return {
    type: GamenightActionTypes.AddGame,
    game,
  };
};
export const removeGame = (id: string | number): GamenightActions => {
  return {
    type: GamenightActionTypes.RemoveGame,
    id,
  };
};

export const changeDate = (date: Date): GamenightActions => {
  return {
    type: GamenightActionTypes.ChangeDate,
    date,
  };
};

export const changeTime = (time: Date): GamenightActions => {
  return {
    type: GamenightActionTypes.ChangeTime,
    time,
  };
};

export const clearGamenight = (): GamenightActions => {
  return {
    type: GamenightActionTypes.ClearGamenight,
  };
};
