import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Divider from './Divider';

import theme from '../theme';

const ParticipantCard = () => {
  return (
    <>
      <View style={styles.root}>
        <MaterialIcons
          name="account-circle"
          size={36}
          color={theme.darkAccent}
        />
        <View style={{ marginLeft: 5 }}>
          <Text style={styles.username}>ColdCoffin</Text>
          <Text style={styles.games}>Dead Of Winter and Alchemists</Text>
        </View>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 15,
  },
  username: {
    fontSize: 16,
    color: theme.light,
  },
  games: {
    fontSize: 14,
    color: theme.faded,
  },
});

export default ParticipantCard;
