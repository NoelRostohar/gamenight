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

interface GameNightProps {
  gameNight: {
    proposedBy: string;
    date: string;
    place: string;
    url: string;
  };
}

const CARD_HEIGHT: number = Dimensions.get('window').height / 1.9;
export const CARD_WIDTH: number = CARD_HEIGHT * 0.6;

const GameNight: React.FC<GameNightProps> = ({
  gameNight: { proposedBy, date, place, url },
}) => {
  return (
    <View style={styles.root}>
      <ImageBackground style={styles.img} source={{ uri: url }}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          style={styles.gradient}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.proposed}>Proposed by</Text>
            <Text style={styles.user}>{proposedBy}</Text>
            <View style={[styles.row, styles.infoRow]}>
              <View style={styles.row}>
                <MaterialIcons
                  name="event"
                  size={12}
                  color={theme.faded}
                  style={styles.icon}
                />
                <Text style={styles.info}>{date}</Text>
              </View>
              <View style={styles.row}>
                <MaterialIcons
                  name="location-on"
                  size={12}
                  color={theme.faded}
                  style={styles.icon}
                />
                <Text style={styles.info}>{place}</Text>
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
    marginRight: 15,
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
