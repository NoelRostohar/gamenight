import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ActionButton from '../components/ActionButton';
import GameNight, { CARD_WIDTH } from '../components/GameNight';

import theme from '../theme';
import { gameNight } from '../api';

const Home = () => {
  return (
    <View style={styles.bg}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 5,
        }}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH}
      >
        {gameNight.map((game) => {
          return <GameNight key={game.id} gameNight={game} />;
        })}
      </ScrollView>
      <ActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
});

export default Home;
