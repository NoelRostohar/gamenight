import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';
import { gameNight } from '../api';

const CARD_HEIGHT: number = Dimensions.get('window').height / 1.9;
const CARD_WIDTH: number = CARD_HEIGHT * 0.6;

const GameNight = () => {
  return (
    <View style={styles.root}>
      <ImageBackground style={styles.img} source={{ uri: gameNight.url }}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          style={styles.gradient}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.proposed}>Proposed by</Text>
            <Text style={styles.user}>{gameNight.proposedBy}</Text>
            <View style={[styles.row, styles.infoRow]}>
              <View style={styles.row}>
                <MaterialIcons
                  name="event"
                  size={12}
                  color={theme.faded}
                  style={styles.icon}
                />
                <Text style={styles.info}>{gameNight.date}</Text>
              </View>
              <View style={styles.row}>
                <MaterialIcons
                  name="location-on"
                  size={12}
                  color={theme.faded}
                  style={styles.icon}
                />
                <Text style={styles.info}>{gameNight.place}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    borderRadius: 25,
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    padding: 20,
  },
  proposed: {
    color: theme.faded,
    fontSize: 10,
  },
  user: {
    color: theme.light,
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoRow: {
    marginTop: 6,
  },
  icon: {
    marginRight: 3,
  },
  info: {
    color: theme.faded,
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default GameNight;
