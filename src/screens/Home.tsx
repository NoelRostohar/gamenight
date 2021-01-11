import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ActionButton from '../components/ActionButton';
import GameNight, { CARD_WIDTH } from '../components/GameNight';
import Game from '../components/Game';
import Divider from '../components/Divider';

import theme from '../theme';
import { gameNight, games } from '../api';

//TODO: Might need refactor to SectionList

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.bg}>
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
        >
          {gameNight.map((game) => {
            return <GameNight key={game.id} gameNight={game} />;
          })}
        </ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All available games</Text>
          {games.map((game) => {
            return (
              <TouchableOpacity
                key={game.id}
                onPress={() => navigation.navigate('GameDetails', game)}
              >
                <Game game={game} />
                <Divider />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <ActionButton />
    </SafeAreaView>
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
