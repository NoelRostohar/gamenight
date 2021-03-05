import React, { useState, useEffect } from "react";
import { View, Switch, StyleSheet } from "react-native";

import Game from "./Game";

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
	const [switchStatus, setSwitchStatus] = useState<boolean>(
		games.some((stateGame: GameType) => stateGame.id === game.id)
	);

	useEffect(() => {
		if (allSelected) setSwitchStatus(true);
	}, [allSelected]);

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
