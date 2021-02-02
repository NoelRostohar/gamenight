import { combineReducers } from 'redux';

import gameNightReducer from './Gamenight/reducer';
import { GamenightState } from './Gamenight/types';

import gamesReducer from './Games/reducer';
import { GamesState } from './Games/types';

export interface GlobalState {
  gameNight: GamenightState;
  games: GamesState;
}

const reducers = combineReducers({
  gameNight: gameNightReducer,
  games: gamesReducer,
});

export default reducers;
