import { combineReducers } from "redux";

import gamenightReducer from "./Gamenight/reducer";
import { GamenightState } from "./Gamenight/types";

import gamenightsReducer from "./Gamenights/reducer";
import { GamenightsState } from "./Gamenights/types";

import gamesReducer from "./Games/reducer";
import { GamesState } from "./Games/types";

import userReducer from "./User/reducer";
import { UserState } from "./User/types";

import changedGamesReducer from "./ChangedGames/reducer";
import { ChangedGamesState } from "./ChangedGames/types";

export interface GlobalState {
	gamenight: GamenightState;
	gamenights: GamenightsState;
	games: GamesState;
	user: UserState;
	changedGames: ChangedGamesState;
}

const reducers = combineReducers({
	gamenight: gamenightReducer,
	gamenights: gamenightsReducer,
	games: gamesReducer,
	user: userReducer,
	changedGames: changedGamesReducer,
});

export default reducers;
