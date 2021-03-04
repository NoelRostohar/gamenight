import React, { memo, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { io } from "socket.io-client";

import Input from "../../components/Input";
import ChatBubble from "../../components/ChatBubble";

import theme from "../../theme";
import { GamenightType } from "../../types";

interface ChatProps {
	gamenight: GamenightType | undefined;
}

const Chat: React.FC<ChatProps> = ({ gamenight }) => {
	if (!gamenight) return null;

	const { chat } = gamenight;

	useEffect(() => {
		const socket = io("http://192.168.34.87:3000");

		socket.connect();

		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<>
			{chat.length > 0 ? (
				<FlatList
					data={chat}
					renderItem={({ item }) => <ChatBubble chat={item} />}
					keyExtractor={({ id }) => id.toString()}
					contentContainerStyle={{ paddingHorizontal: 20 }}
					inverted
				/>
			) : (
				<View style={styles.noChatContainer}>
					<Text style={styles.noChatText}>No messages yet.</Text>
				</View>
			)}
			<View style={styles.inputContainer}>
				<Input
					icon='send'
					flexSize={1}
					placeholder='Send a message'
					button={
						<TouchableOpacity>
							<Text style={styles.button}>SEND</Text>
						</TouchableOpacity>
					}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	noChatContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	noChatText: {
		color: theme.faded,
	},
	inputContainer: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: "center",
		flexDirection: "row",
	},
	button: {
		color: theme.primary,
	},
});

export default memo(Chat);
