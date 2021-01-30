import { GamesState, StoreGamesAction, GamesActionTypes } from './types';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

export const storeGames = ({ games }: GamesState): StoreGamesAction => {
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
      const res = await axios.get('http://192.168.1.6:3000');
      dispatch(storeGames({ games: res.data }));
    } catch (err) {
      console.log(err);
    }
  };
};
