import { combineReducers } from 'redux';

import gamenightReducer from './Gamenight/reducer';
import { GamenightState } from './Gamenight/types';

import gamenightsReducer from './Gamenights/reducer';
import { GamenightsState } from './Gamenights/types';

import gamesReducer from './Games/reducer';
import { GamesState } from './Games/types';

export interface GlobalState {
  gamenight: GamenightState;
  gamenights: GamenightsState;
  games: GamesState;
}

const reducers = combineReducers({
  gamenight: gamenightReducer,
  gamenights: gamenightsReducer,
  games: gamesReducer,
});

export default reducers;
