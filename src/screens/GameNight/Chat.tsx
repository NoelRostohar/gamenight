import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Input from '../../components/Input';

import theme from '../../theme';

const Chat = () => {
  return (
    <>
      <ScrollView>
        <Text></Text>
      </ScrollView>
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
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    color: theme.primary,
  },
});

export default Chat;
