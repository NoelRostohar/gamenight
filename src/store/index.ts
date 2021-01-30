import { combineReducers } from 'redux';

import gameNightReducer from './GameNight/reducer';
import { GameNightState } from './GameNight/types';

import gamesReducer from './Games/reducer';
import { GamesState } from './Games/types';

export interface GlobalState {
  gameNight: GameNightState;
  games: GamesState;
}

const reducers = combineReducers({
  gameNight: gameNightReducer,
  games: gamesReducer,
});

export default reducers;
