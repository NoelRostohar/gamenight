import React, { memo, useEffect, useState, useMemo } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from "react-native";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

import Input from "../../components/Input";
import ChatBubble from "../../components/ChatBubble";

import theme from "../../theme";
import { GamenightType, ChatType } from "../../types";
import { GlobalState } from "../../store";

interface ChatProps {
	gamenight: GamenightType | undefined;
}

const Chat: React.FC<ChatProps> = ({ gamenight }) => {
	if (!gamenight) return null;

	const { chat, id } = gamenight;
	const user = useSelector((state: GlobalState) => state.user);

	const [gamenightChat, setGamenightChat] = useState<ChatType[]>(chat);

	const sortedChat = useMemo(
		() => gamenightChat.slice().sort((a, b) => b.id - a.id),
		[gamenightChat]
	);
	const [msg, setMsg] = useState<string>("");

	const socket = useMemo(() => io("http://192.168.34.87:3000"), []);

	const sendMsg = (text: string) => {
		setMsg("");
		socket.emit("sendMessage", {
			username: user,
			message: text,
			gamenightId: id,
		});
	};

	useEffect(() => {
		socket.connect();
		socket.emit("joinChat", gamenight.id);

		socket.on("chatUpdate", (incChat: ChatType[]) => {
			setGamenightChat((prev) => [incChat[0], ...prev]);
		});

		return () => {
			socket.emit("leaveChat");
			socket.disconnect();
		};
	}, []);

	return (
		<>
			{sortedChat.length > 0 ? (
				<FlatList
					data={sortedChat}
					renderItem={({ item }) => (
						<ChatBubble isUser={item.username === user} chat={item} />
					)}
					keyExtractor={({ id }) => id.toString()}
					contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
					inverted
				/>
			) : (
				<View style={styles.noChatContainer}>
					<Text style={styles.noChatText}>No messages yet.</Text>
				</View>
			)}
			<View style={styles.inputContainer}>
				<Input
					value={msg}
					icon='send'
					flexSize={1}
					onChangeText={(text: string) => setMsg(text)}
					placeholder='Send a message'
					button={
						<TouchableOpacity onPress={() => sendMsg(msg)}>
							<Text style={styles.button}>SEND</Text>
						</TouchableOpacity>
					}
					onSubmitEditing={(
						event: NativeSyntheticEvent<TextInputChangeEventData>
					) => {
						sendMsg(event.nativeEvent.text);
					}}
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
