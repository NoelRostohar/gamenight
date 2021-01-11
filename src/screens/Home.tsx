import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import ActionButton from '../components/ActionButton';
import GameNight from '../components/GameNight';

import theme from '../theme';

const Home = () => {
  return (
    <View style={styles.bg}>
      <GameNight />
      <ActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
});

export default Home;
