import React, { Fragment } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import ActionButton from '../components/ActionButton';
import GameNight, { CARD_WIDTH } from '../components/GameNight';
import Game from '../components/Game';
import Divider from '../components/Divider';

import theme from '../theme';
import { gameNight, games } from '../api';

//TODO: Might need refactor to SectionList

const Home = () => {
  return (
    <View style={styles.bg}>
      <ScrollView nestedScrollEnabled>
        <ScrollView
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
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
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All available games</Text>
          {games.map((game) => {
            return (
              <Fragment key={game.id}>
                <Game game={game} />
                <Divider />
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
      <ActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: theme.faded,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
