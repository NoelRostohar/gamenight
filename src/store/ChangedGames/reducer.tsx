import {
	ChangedGamesActionTypes,
	ChangedGamesState,
	ChangedGamesActions,
} from "./types";

const initialState: ChangedGamesState = {
	addedGames: [],
	removedGames: [],
};

const reducer = (state = initialState, action: ChangedGamesActions) => {
	switch (action.type) {
		case ChangedGamesActionTypes.ADD_GAME:
			return {
				...state,
				addedGames: [...state.addedGames, action.game],
			};
		case ChangedGamesActionTypes.REMOVE_GAME:
			return {
				...state,
				removedGames: [...state.removedGames, action.id],
			};
		case ChangedGamesActionTypes.DELETE_ADDED:
			return {
				...state,
				addedGames: state.addedGames.filter((game) => game.id !== action.id),
			};
		case ChangedGamesActionTypes.DELETE_REMOVED:
			return {
				...state,
				removedGames: state.removedGames.filter((id) => id !== action.id),
			};
		case ChangedGamesActionTypes.CLEAR_CHANGED_GAMES:
			return initialState;
		default:
			return state;
	}
};

export default reducer;
