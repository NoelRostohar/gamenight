import { GamenightState, GamenightActionTypes, Action } from './types';
import { GameType } from '../../types';
import { StateStatusTypes } from '../statusTypes';

const initialState: GamenightState = {
  games: [],
  date: new Date(),
  time: new Date(),
  place: {
    name: '',
    address: '',
    id: undefined,
  },
  loading: false,
  error: '',
  status: 'idle',
};

const GamenightReducer = (
  state = initialState,
  action: Action
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
    case StateStatusTypes.StartFetching:
      return {
        ...state,
        loading: true,
        status: 'fetching',
      };
    case StateStatusTypes.FetchSuccess:
      return {
        ...state,
        loading: false,
        status: 'success',
      };
    case StateStatusTypes.FetchError:
      return {
        ...state,
        loading: false,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};

export default GamenightReducer;
