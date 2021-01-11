import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';

interface GameProps {
  game: {
    url: string;
    name: string;
    minPlayers: number | string;
    maxPlayers: number | string;
    owner: string;
  };
}

const Game: React.FC<GameProps> = ({
  game: { url, name, minPlayers, maxPlayers, owner },
}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={[styles.row, { marginTop: 6, marginBottom: 6 }]}>
          <MaterialIcons
            style={styles.icon}
            name="group"
            size={12}
            color={theme.faded}
          />
          <Text style={styles.info}>{`${minPlayers} - ${maxPlayers}`}</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons
            style={styles.icon}
            name="person-pin-circle"
            size={12}
            color={theme.faded}
          />
          <Text style={styles.info}>{`Owned by ${owner}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  infoContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  name: {
    color: theme.light,
    fontSize: 16,
  },
  icon: {
    marginRight: 3,
  },
  info: {
    color: theme.faded,
    fontSize: 12,
  },
});

export default Game;
