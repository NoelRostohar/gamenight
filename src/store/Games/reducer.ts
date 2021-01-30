import { GamesState, GamesActionTypes, StoreGamesAction } from './types';

const initialState: GamesState = {
  games: [],
};

const gamesReducer = (state = initialState, action: StoreGamesAction) => {
  switch (action.type) {
    case GamesActionTypes.StoreGames:
      return {
        games: action.games,
      };
    default:
      return state;
  }
};

export default gamesReducer;
