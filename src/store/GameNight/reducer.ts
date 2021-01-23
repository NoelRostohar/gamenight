import {
  GameNightActions,
  GameNightState,
  GameNightActionTypes,
} from './types';

const initialState: GameNightState = {
  games: [],
  date: new Date(),
  time: new Date(),
  place: {
    name: '',
    address: '',
  },
};

const GameNightReducer = (
  state = initialState,
  action: GameNightActions
): GameNightState => {
  switch (action.type) {
    case GameNightActionTypes.ChangePlace:
      return {
        ...state,
        place: action.place,
      };
    case GameNightActionTypes.ChangeTime:
      return {
        ...state,
        time: action.time,
      };
    case GameNightActionTypes.ChangeDate:
      return {
        ...state,
        date: action.date,
      };
    case GameNightActionTypes.AddGame:
      return {
        ...state,
        games: [...state.games, action.game],
      };
    case GameNightActionTypes.RemoveGame:
      return {
        ...state,
        games: state.games.filter((game) => game._id !== action._id),
      };
    default:
      return state;
  }
};

export default GameNightReducer;
