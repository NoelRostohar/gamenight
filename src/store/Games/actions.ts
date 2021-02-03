import {
  GamesState,
  GamesActions,
  StoreGamesAction,
  GamesActionTypes,
} from './types';
import { ThunkAction } from 'redux-thunk';
import axios from '../../../axiosInstance';

export const storeGames = ({ games }: GamesState): GamesActions => {
  return {
    type: GamesActionTypes.StoreGames,
    games,
  };
};

export const getGames = (): ThunkAction<
  void,
  GamesState,
  unknown,
  StoreGamesAction
> => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/games');
      dispatch(storeGames({ games: res.data }));
    } catch (err) {
      console.log(err);
    }
  };
};
