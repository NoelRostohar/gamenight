import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { format } from "date-fns";

import theme from "../theme";

import { ChatType } from "../types";

interface ChatBubbleProps {
	chat: ChatType;
	isUser: boolean;
}

const MIN_WIDTH = Dimensions.get("window").width / 2.5;

const ChatBubble: React.FC<ChatBubbleProps> = ({ chat, isUser }) => {
	const styles = StyleSheet.create({
		root: {
			paddingHorizontal: 15,
			paddingVertical: 10,
			backgroundColor: isUser ? theme.primary : theme.lightFade,
			borderRadius: 15,
			minWidth: MIN_WIDTH,
			maxWidth: "100%",
			marginVertical: 5,
			alignSelf: isUser ? "flex-end" : "flex-start",
		},
		infoContainer: {
			flexDirection: "row",
			alignItems: "baseline",
			justifyContent: "space-between",
			marginBottom: 5,
		},
		username: {
			color: isUser ? theme.light : theme.darkAccent,
			fontSize: 14,
			flex: 1,
		},
		time: {
			color: theme.faded,
			fontSize: 12,
		},
		message: {
			color: isUser ? theme.light : theme.dark,
		},
	});

	return (
		<View style={styles.root}>
			<View style={styles.infoContainer}>
				<Text numberOfLines={1} style={styles.username}>
					{chat.username}
				</Text>
				<Text numberOfLines={1} style={styles.time}>
					{format(new Date(chat.createdAt), "kk:mm")}
				</Text>
			</View>
			<Text style={styles.message}>{chat.message}</Text>
		</View>
	);
};

export default ChatBubble;
