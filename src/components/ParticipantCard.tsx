import React, { useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Divider from "./Divider";

import theme from "../theme";
import { GameType, Participant } from "src/types";

interface ParticipantCard {
	participant: Participant;
	isUser: boolean;
}

const ParticipantCard: React.FC<ParticipantCard> = ({
	participant,
	isUser,
}) => {
	const gamelist = useCallback(
		(games: GameType[]) => {
			const MAX_LENGTH: number = 3;

			if (games.length === 1) return games[0].name;
			else if (games.length > MAX_LENGTH)
				return games
					.slice(0, MAX_LENGTH)
					.reduce(
						(prevValue, currValue, index, array) =>
							prevValue +
							(index < 1
								? ""
								: index < array.length
								? ", "
								: ` and ${games.length - MAX_LENGTH} more...`) +
							currValue.name,
						""
					);

			return games.reduce(
				(prevValue, currValue, index, array) =>
					prevValue +
					(index < 1 ? "" : index < array.length - 1 ? ", " : " and ") +
					currValue.name,
				""
			);
		},
		[participant.games]
	);

	return (
		<>
			<View style={styles.root}>
				<View style={styles.userInfo}>
					<MaterialIcons
						name='account-circle'
						size={36}
						color={theme.darkAccent}
					/>
					<View style={styles.container}>
						<Text style={styles.username}>{participant.username}</Text>
						<Text style={styles.games}>{gamelist(participant.games)}</Text>
					</View>
				</View>
				{isUser && (
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Change</Text>
					</TouchableOpacity>
				)}
			</View>
			<Divider />
		</>
	);
};

const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 15,
		justifyContent: "space-between",
	},
	userInfo: {
		flexDirection: "row",
		flex: 3,
		flexWrap: "wrap",
	},
	container: {
		marginLeft: 5,
		flex: 3,
	},
	username: {
		fontSize: 16,
		color: theme.light,
		flexShrink: 1,
	},
	games: {
		fontSize: 14,
		color: theme.faded,
	},
	button: {
		flex: 1,
		borderRadius: 150,
		backgroundColor: theme.primary,
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
	},
	buttonText: {
		color: theme.light,
	},
});

export default ParticipantCard;
