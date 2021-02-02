import {
  GamenightActions,
  GamenightState,
  GamenightActionTypes,
} from './types';
import { GameType } from '../../types';

const initialState: GamenightState = {
  games: [],
  date: new Date(),
  time: new Date(),
  place: {
    name: '',
    address: '',
  },
};

const GamenightReducer = (
  state = initialState,
  action: GamenightActions
): GamenightState => {
  switch (action.type) {
    case GamenightActionTypes.ChangePlace:
      return {
        ...state,
        place: action.place,
      };
    case GamenightActionTypes.ChangeTime:
      return {
        ...state,
        time: action.time,
      };
    case GamenightActionTypes.ChangeDate:
      return {
        ...state,
        date: action.date,
      };
    case GamenightActionTypes.AddGame:
      return !state.games.some((game: GameType) => game.id === action.game.id)
        ? {
            ...state,
            games: [...state.games, action.game],
          }
        : state;
    case GamenightActionTypes.RemoveGame:
      return {
        ...state,
        games: state.games.filter((game) => game.id !== action.id),
      };
    case GamenightActionTypes.ClearGamenight:
      return initialState;
    default:
      return state;
  }
};

export default GamenightReducer;
