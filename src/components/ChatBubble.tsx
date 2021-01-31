import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import theme from '../theme';

const MIN_WIDTH = Dimensions.get('window').width / 2.5;

const ChatBubble = () => {
  const styles = StyleSheet.create({
    root: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: theme.lightFade,
      borderRadius: 15,
      minWidth: MIN_WIDTH,
      maxWidth: '100%',
      marginVertical: 5,
      alignSelf: 'flex-start',
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    username: {
      color: theme.darkAccent,
      fontSize: 14,
      flex: 1,
    },
    time: {
      color: theme.faded,
      fontSize: 12,
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.username}>
          ColdCoffin
        </Text>
        <Text numberOfLines={1} style={styles.time}>
          18:35
        </Text>
      </View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi est
        reprehenderit dolores sint quisquam voluptates. Laborum nostrum vel,
        pariatur velit repellat saepe similique beatae! Fugit dolor pariatur
        veritatis nisi perspiciatis fugiat animi sed, nesciunt eum at vel.
        Iusto, quod quia obcaecati vero, modi praesentium earum dicta
        dignissimos nihil sit officiis?
      </Text>
    </View>
  );
};

export default ChatBubble;
