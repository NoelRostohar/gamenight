import { GamenightActions, GamenightActionTypes, Action } from './types';
import { ThunkAction } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../../axiosInstance';

import { GameType, Place } from '../../types';
import { GlobalState } from '../';
import { fetchError, fetchSuccess, startFetching } from '../statusActions';
import { updateGamenight } from '../Gamenights/actions';

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
  Action
> => {
  return async (dispatch, getState) => {
    const {
      gamenight: { date, place, games, time },
    } = getState();
    dispatch(startFetching());
    try {
      const proposedBy = await AsyncStorage.getItem('@username');
      await axios.post('/gamenight', {
        url: games[0].url,
        games,
        proposedBy,
        date: date,
        time: time,
        placeId: place.id,
      });
      dispatch(fetchSuccess());
      dispatch(clearGamenight());
    } catch (err) {
      dispatch(fetchError(err));
      console.log(err);
    }
  };
};

export const joinGamenight = (
  gamenightId: number,
  navigation: any
): ThunkAction<void, GlobalState, unknown, any> => {
  return async (dispatch, getState) => {
    const {
      gamenight: { games },
    } = getState();
    dispatch(startFetching());
    try {
      const username = await AsyncStorage.getItem('@username');
      const res = await axios.post(`/gamenight/join/${gamenightId}`, {
        games,
        username,
      });
      dispatch(updateGamenight({ gamenightId, gamenight: res.data }));
      dispatch(fetchSuccess());
      dispatch(clearGamenight());
      navigation.navigate('GamenightTabs');
    } catch (err) {
      dispatch(fetchError(err));
      console.log(err.message);
    }
  };
};
