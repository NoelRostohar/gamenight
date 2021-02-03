import { GamesState, GamesActionTypes, GamesActions } from './types';

const initialState: GamesState = {
  games: [],
};

const gamesReducer = (
  state = initialState,
  action: GamesActions
): GamesState => {
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
