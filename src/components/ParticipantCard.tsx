import React, { useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Divider from './Divider';

import theme from '../theme';
import { GameType, Participant } from 'src/types';

interface ParticipantCard {
  participant: Participant;
}

const ParticipantCard: React.FC<ParticipantCard> = ({ participant }) => {
  const gamelist = useCallback(
    (games: GameType[]) => {
      const MAX_LENGTH: number = 3;

      if (games.length === 1) return games[0].name;
      else if (games.length > MAX_LENGTH)
        return games
          .slice(0, MAX_LENGTH)
          .reduce(
            (prevValue, currValue, index, array) =>
              prevValue +
              (index < 1
                ? ''
                : index < array.length
                ? ', '
                : ` and ${games.length - MAX_LENGTH} more...`) +
              currValue.name,
            ''
          );

      return games.reduce(
        (prevValue, currValue, index, array) =>
          prevValue +
          (index < 1 ? '' : index < array.length - 1 ? ', ' : ' and ') +
          currValue.name,
        ''
      );
    },
    [participant.games]
  );

  return (
    <>
      <View style={styles.root}>
        <MaterialIcons
          name="account-circle"
          size={36}
          color={theme.darkAccent}
        />
        <View style={{ marginLeft: 5 }}>
          <Text style={styles.username}>{participant.username}</Text>
          <Text style={styles.games}>{gamelist(participant.games)}</Text>
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
