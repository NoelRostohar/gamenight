import { GameNightActions, GameNightState } from './types';

const initialState: GameNightState = {
  games: [],
  date: '',
  time: '',
  place: {
    name: '',
    address: '',
  },
};

const GameNightReducer = (state = initialState, action: GameNightActions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default GameNightReducer;
