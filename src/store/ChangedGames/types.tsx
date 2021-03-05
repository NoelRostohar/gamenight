import { GameType } from "../../types";

export enum ChangedGamesActionTypes {
	ADD_GAME = "ADD_GAME",
	REMOVE_GAME = "REMOVE_GAME",
	DELETE_ADDED = "DELETE_ADDED",
	DELETE_REMOVED = "DELETE_REOMVED",
	CLEAR_CHANGED_GAMES = "CLEAR_CHANGED_GAMES",
}

export interface ChangedGamesState {
	addedGames: GameType[];
	removedGames: number[];
}

interface AddGame {
	type: ChangedGamesActionTypes.ADD_GAME;
	game: GameType;
}

interface RemoveGame {
	type: ChangedGamesActionTypes.REMOVE_GAME;
	id: number;
}

interface DeleteAdded {
	type: ChangedGamesActionTypes.DELETE_ADDED;
	id: number;
}

interface DeleteRemoved {
	type: ChangedGamesActionTypes.DELETE_REMOVED;
	id: number;
}

interface ClearChangedGames {
	type: ChangedGamesActionTypes.CLEAR_CHANGED_GAMES;
}

export type ChangedGamesActions =
	| AddGame
	| RemoveGame
	| DeleteAdded
	| DeleteRemoved
	| ClearChangedGames;
