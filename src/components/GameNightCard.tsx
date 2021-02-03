import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import IconText from './IconText';

import theme from '../theme';
import { GamenightType } from '../types';

const CARD_HEIGHT: number = Dimensions.get('window').height / 1.9;
export const CARD_WIDTH: number = CARD_HEIGHT * 0.6;

interface GamenightProps {
  gamenight: GamenightType;
}

const GamenightCard: React.FC<GamenightProps> = ({ gamenight }) => {
  const { proposedBy, date, place, url } = gamenight;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('GamenightNav', { gamenight })}
    >
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
                <View style={{ marginRight: 10 }}>
                  <IconText icon="event" size={12} text={date} />
                </View>
                <IconText icon="location-on" size={12} text={place.name} />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GamenightCard;
