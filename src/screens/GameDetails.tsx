import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import theme from '../theme';
import { MainStackParamList } from '../navigation';

type GameDetailsRouteProp = RouteProp<MainStackParamList, 'GameDetails'>;

interface GameDetailsProps {
  route: GameDetailsRouteProp;
}

const GameDetails: React.FC<GameDetailsProps> = ({
  route: {
    params: { url },
  },
}) => {
  return (
    <View style={styles.bg}>
      <ImageBackground
        style={styles.img}
        source={{ uri: url }}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  img: {
    height: 400,
  },
});

export default GameDetails;
