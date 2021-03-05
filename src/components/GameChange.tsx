import React, { useState, useEffect, useMemo } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import Game from "./Game";

import {
	addGame,
	removeGame,
	deleteAdded,
	deleteRemoved,
} from "../store/ChangedGames/actions";
import theme from "../theme";
import { GameType } from "../types";

interface GameChangeProps {
	game: GameType;
	allSelected: boolean;
	games: GameType[];
}

const GameChange: React.FC<GameChangeProps> = ({
	game,
	allSelected,
	games,
}) => {
	const dispatch = useDispatch();

	const gameIncluded = useMemo(
		() => games.some((stateGame: GameType) => stateGame.id === game.id),
		[games]
	);

	const [switchStatus, setSwitchStatus] = useState<boolean>(gameIncluded);

	useEffect(() => {
		if (allSelected) setSwitchStatus(true);
	}, [allSelected]);

	useEffect(() => {
		if (gameIncluded && !switchStatus) dispatch(removeGame(game.id));
		else if (!gameIncluded && switchStatus) dispatch(addGame(game));
		else if (!gameIncluded && !switchStatus) dispatch(deleteAdded(game.id));
		else if (gameIncluded && switchStatus) dispatch(deleteRemoved(game.id));
	}, [switchStatus]);

	return (
		<View style={styles.gameRow}>
			<Game game={game} />
			<Switch
				trackColor={{ false: theme.faded, true: theme.primary }}
				ios_backgroundColor={theme.faded}
				thumbColor={theme.lightFade}
				value={switchStatus}
				onValueChange={() => setSwitchStatus((prev) => !prev)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	gameRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

export default GameChange;
