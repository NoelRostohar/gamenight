import { ChangedGamesActions, ChangedGamesActionTypes } from "./types";
import { GameType } from "../../types";

export const addGame = (game: GameType): ChangedGamesActions => {
	return {
		type: ChangedGamesActionTypes.ADD_GAME,
		game,
	};
};

export const removeGame = (id: number): ChangedGamesActions => {
	return {
		type: ChangedGamesActionTypes.REMOVE_GAME,
		id,
	};
};

export const deleteAdded = (id: number): ChangedGamesActions => {
	return {
		type: ChangedGamesActionTypes.DELETE_ADDED,
		id,
	};
};

export const deleteRemoved = (id: number): ChangedGamesActions => {
	return {
		type: ChangedGamesActionTypes.DELETE_REMOVED,
		id,
	};
};

export const clearChangedGames = (): ChangedGamesActions => {
	return {
		type: ChangedGamesActionTypes.CLEAR_CHANGED_GAMES,
	};
};
