import React from "react";
import { Text, StyleSheet, Alert } from "react-native";
import {
	createStackNavigator,
	CardStyleInterpolators,
} from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../axiosInstance";

import Home from "../screens/Home";
import GameDetails from "../screens/GameDetails";
import HowToPlay from "../screens/HowToPlay";
import AddGamenightNavigation from "./AddGamenightNavigation";
import GamenightTabs from "./GamenightTabs";
import VoteGames from "../screens/Gamenight/VoteGames";
import ChangeGames from "../screens/Gamenight/ChangeGames";

import HeaderRightActionButton from "../components/HeaderRightActionButton";

import theme from "../theme";
import { GamenightType, GameType } from "../types";
import { GlobalState } from "../store";
import { joinGamenight } from "../store/Gamenight/actions";

export type MainStackParamList = {
	Home: undefined;
	GameDetails: GameType;
	HowToPlay: { howToPlay: string; name: string };
	AddGamenightNavigation: undefined;
	GamenightTabs: { gamenight: GamenightType };
	VoteGames: { gamenight: GamenightType };
	ChangeGames: { gamenight: GamenightType };
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
	const dispatch = useDispatch();
	const { games } = useSelector((state: GlobalState) => state.gamenight);
	const user = useSelector((state: GlobalState) => state.user);
	const changedGames = useSelector((state: GlobalState) => state.changedGames);

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.dark,
					shadowOpacity: 0,
					elevation: 0,
				},
			}}
		>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{
					headerTitle: () => <Text style={styles.title}>Game Nights</Text>,
					headerTitleAlign: "left",
				}}
			/>
			<Stack.Screen
				name='GameDetails'
				component={GameDetails}
				options={{
					cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
					headerTransparent: true,
					headerTintColor: theme.light,
					headerTitleStyle: { display: "none" },
					header: () => null,
				}}
			/>
			<Stack.Screen
				name='HowToPlay'
				component={HowToPlay}
				options={{ headerBackTitle: "" }}
			/>
			<Stack.Screen
				name='AddGamenightNavigation'
				component={AddGamenightNavigation}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='GamenightTabs'
				component={GamenightTabs}
				options={({ navigation, route }) => ({
					title: route.params.gamenight.proposedBy + "'s Gamenight",
					headerRight: () => (
						<HeaderRightActionButton
							color={theme.primary}
							onPress={() =>
								navigation.navigate("VoteGames", {
									gamenight: route.params.gamenight,
								})
							}
							text='JOIN'
						/>
					),
				})}
			/>
			<Stack.Screen
				name='VoteGames'
				component={VoteGames}
				options={({ route, navigation }) => ({
					title: "Choose Games",
					headerBackImage: () => (
						<MaterialIcons name='close' size={24} color={theme.light} />
					),
					headerRight: () => (
						<HeaderRightActionButton
							icon='check'
							color={theme.confirmation}
							onPress={() =>
								games.length < 1
									? Alert.alert("Warning", "Please select at least one game.")
									: dispatch(
											joinGamenight(route.params.gamenight.id, navigation)
									  )
							}
						/>
					),
				})}
			/>
			<Stack.Screen
				name='ChangeGames'
				component={ChangeGames}
				options={({ route, navigation }) => ({
					title: "Choose Games",
					headerBackImage: () => (
						<MaterialIcons name='close' size={24} color={theme.light} />
					),
					headerRight: () => (
						<HeaderRightActionButton
							icon='check'
							color={theme.confirmation}
							onPress={() => {
								const participantId = route.params.gamenight.participants.find(
									(participant) => participant.username === user
								)?.id;
								axios.patch(
									`/gamenight/participants/${participantId}`,
									changedGames
								);
							}}
						/>
					),
				})}
			/>
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		color: theme.light,
		fontWeight: "bold",
	},
});

export default MainStack;
