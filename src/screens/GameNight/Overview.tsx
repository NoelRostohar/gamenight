import React, { memo } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import { useSelector } from "react-redux";

import IconText from "../../components/IconText";
import ParticipantCard from "../../components/ParticipantCard";

import theme from "../../theme";
import { GamenightType, Participant } from "../../types";
import { GlobalState } from "../../store";

interface OverviewProps {
	gamenight: GamenightType | undefined;
}

const Overview: React.FC<OverviewProps> = ({ gamenight }) => {
	if (!gamenight) return null;

	const user = useSelector((state: GlobalState) => state.user);

	const { date, participants, place, time } = gamenight;

	return (
		<ScrollView contentContainerStyle={styles.bg}>
			<View style={styles.iconContainer}>
				<IconText
					icon='calendar-today'
					size={16}
					text={format(new Date(date), "dd/MM")}
					color={theme.light}
				/>
			</View>
			<View style={styles.iconContainer}>
				<IconText
					icon='timer'
					size={16}
					text={format(new Date(time), "kk:mm")}
					color={theme.light}
				/>
			</View>
			<View style={styles.iconContainer}>
				<IconText
					icon='location-pin'
					size={16}
					text={place ? place.name : "To be determined"}
					color={theme.light}
					subtext={place && place.address}
				/>
			</View>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Participants</Text>
			</View>
			{participants.map((participant: Participant) => {
				return (
					<ParticipantCard
						key={participant.id}
						participant={participant}
						isUser={participant.username === user}
					/>
				);
			})}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	bg: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		paddingTop: 10,
	},
	iconContainer: {
		marginVertical: 10,
	},
	section: {
		paddingTop: 20,
		paddingBottom: 10,
	},
	sectionTitle: {
		color: theme.faded,
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default memo(Overview);
