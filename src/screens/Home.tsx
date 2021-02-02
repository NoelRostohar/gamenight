import React, { Fragment } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import ActionButton from '../components/ActionButton';
import Gamenight, { CARD_WIDTH } from '../components/GamenightCard';
import Game from '../components/Game';
import Divider from '../components/Divider';

import theme from '../theme';
import { gameNight } from '../api';
import { GameType } from '../types';
import { GlobalState } from '../store';

//TODO: Might need refactor to SectionList

const Home = () => {
  const navigation = useNavigation();
  const { games } = useSelector((state: GlobalState) => state.games);

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
            paddingTop: 15,
          }}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={CARD_WIDTH}
          overScrollMode="never"
        >
          {gameNight.map((game) => {
            return <Gamenight key={game.id} gameNight={game} />;
          })}
        </ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All available games</Text>
          {games.map((game: GameType) => {
            return (
              <Fragment key={game.id}>
                <Game game={game} />
                <Divider />
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
      <ActionButton onPress={() => navigation.navigate('AddGamenightNav')} />
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
