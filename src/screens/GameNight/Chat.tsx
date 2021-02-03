import React, { memo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Input from '../../components/Input';
import ChatBubble from '../../components/ChatBubble';

import theme from '../../theme';
import { GamenightType } from '../../types';

interface ChatProps {
  gamenight: GamenightType;
}

const Chat: React.FC<ChatProps> = ({ gamenight: { chat } }) => {
  return (
    <>
      <FlatList
        data={chat}
        renderItem={({ item }) => <ChatBubble chat={item} />}
        keyExtractor={({ id }) => id.toString()}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        inverted
      />
      <View style={styles.inputContainer}>
        <Input
          icon="send"
          flexSize={1}
          placeholder="Send a message"
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
  inputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    color: theme.primary,
  },
});

export default memo(Chat);
