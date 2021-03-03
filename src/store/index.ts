import { combineReducers } from "redux";

import gamenightReducer from "./Gamenight/reducer";
import { GamenightState } from "./Gamenight/types";

import gamenightsReducer from "./Gamenights/reducer";
import { GamenightsState } from "./Gamenights/types";

import gamesReducer from "./Games/reducer";
import { GamesState } from "./Games/types";

import userReducer from "./User/reducer";
import { UserState } from "./User/types";

export interface GlobalState {
	gamenight: GamenightState;
	gamenights: GamenightsState;
	games: GamesState;
	user: UserState;
}

const reducers = combineReducers({
	gamenight: gamenightReducer,
	gamenights: gamenightsReducer,
	games: gamesReducer,
	user: userReducer,
});

export default reducers;
