import { GamenightActions, GamenightActionTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../../axiosInstance';
import { format } from 'date-fns';

import { GameType, Place } from '../../types';
import { GlobalState } from '../';

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

export const addGamenight = (): ThunkAction<
  void,
  GlobalState,
  unknown,
  GamenightActions
> => {
  return async (dispatch, getState) => {
    const {
      gamenight: { date, place, games, time },
    } = getState();
    const dateFormat = format(date, 'dd/MM');
    const timeFormat = format(time, 'kk:mm');
    try {
      const proposedBy = await AsyncStorage.getItem('@username');
      await axios.post('/gamenight', {
        url: games[0].url,
        games,
        proposedBy,
        date: dateFormat,
        time: timeFormat,
        placeId: place.id,
      });
      dispatch(clearGamenight());
    } catch (err) {
      console.log(err);
    }
  };
};
