import React, { Fragment, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import ActionButton from '../components/ActionButton';
import Gamenight, { CARD_WIDTH } from '../components/GamenightCard';
import Game from '../components/Game';
import Divider from '../components/Divider';
import GetInitialData from '../components/GetInitialData';

import { getGames } from '../store/Games/actions';
import { getGamenights } from '../store/Gamenights/actions';

import theme from '../theme';
import { GameType } from '../types';
import { GlobalState } from '../store';

//TODO: Might need refactor to SectionList

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { games } = useSelector((state: GlobalState) => state.games);
  const { gamenights } = useSelector((state: GlobalState) => state.gamenights);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(getGamenights());
      dispatch(getGames());
    });

    return unsubscribe;
  }, []);

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
          {gamenights.map((gamenight) => {
            return <Gamenight key={gamenight.id} gamenight={gamenight} />;
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
