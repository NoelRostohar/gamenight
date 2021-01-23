import { combineReducers } from 'redux';

import gameNightReducer from './GameNight/reducer';
import { GameNightState } from './GameNight/types';

export interface GlobalState {
  gameNight: GameNightState;
}

const reducers = combineReducers({
  gameNight: gameNightReducer,
});

export default reducers;
