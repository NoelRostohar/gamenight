import React, { useEffect } from "react";
import { ScrollView, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RouteProp } from "@react-navigation/native";

import GameSelect from "../../components/GameSelect";
import Loading from "../../components/Loading";

import { clearChangedGames } from "../../store/ChangedGames/actions";
import { GlobalState } from "../../store";
import { MainStackParamList } from "../../navigation";

interface ChangeGamesProps {
	route: RouteProp<MainStackParamList, "ChangeGames">;
}

const ChangeGames: React.FC<ChangeGamesProps> = ({ route }) => {
	const { loading, status } = useSelector(
		(state: GlobalState) => state.gamenight
	);

	const dispatch = useDispatch();

	const user = useSelector((state: GlobalState) => state.user);

	const { participants } = route.params.gamenight;

	useEffect(() => {
		if (!loading && status === "error")
			Alert.alert("Error", "There was a problem with the server.");

		return () => {
			dispatch(clearChangedGames());
		};
	}, [loading, status]);

	return (
		<>
			{loading && status === "fetching" && <Loading />}
			<ScrollView contentContainerStyle={{ padding: 20 }}>
				<GameSelect
					participantGames={
						participants.find((participant) => participant.username === user)
							?.games
					}
				/>
			</ScrollView>
		</>
	);
};

export default ChangeGames;
