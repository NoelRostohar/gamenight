import React, { Fragment, useEffect, useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import ActionButton from '../components/ActionButton';
import Gamenight, { CARD_WIDTH } from '../components/GamenightCard';
import Game from '../components/Game';
import Divider from '../components/Divider';

import { getGames } from '../store/Games/actions';
import { getGamenights } from '../store/Gamenights/actions';

import theme from '../theme';
import { GameType } from '../types';
import { GlobalState } from '../store';

//TODO: Might need refactor to SectionList

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { games } = useSelector((state: GlobalState) => state.games);
  const { gamenights } = useSelector((state: GlobalState) => state.gamenights);

  const refresh = useCallback(() => {
    setRefreshing(true);
    dispatch(getGamenights());
    dispatch(getGames());
    setRefreshing(false);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => refresh());

    return unsubscribe;
  }, []);

  return (
    <View style={styles.bg}>
      <ScrollView
        nestedScrollEnabled
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }
      >
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
      <ActionButton
        onPress={() => navigation.navigate('AddGamenightNavigation')}
      />
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
