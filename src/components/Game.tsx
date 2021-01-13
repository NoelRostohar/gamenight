import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IconText from './IconText';
import Divider from './Divider';

import theme from '../theme';
import { GameType } from '../types';

interface GameProps {
  game: GameType;
}

const Game: React.FC<GameProps> = ({ game }) => {
  const { url, name, minPlayers, maxPlayers, owner } = game;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('GameDetails', game)}>
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri: url }} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={{ marginTop: 6, marginBottom: 6 }}>
            <IconText
              icon="group"
              size={12}
              text={`${minPlayers} - ${maxPlayers}`}
            />
          </View>
          <IconText
            icon="person-pin-circle"
            size={12}
            text={`Owned by ${owner}`}
          />
        </View>
      </View>
      <Divider />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Game;
