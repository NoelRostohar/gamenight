import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ActionButton from '../components/ActionButton';
import GameNight, { CARD_WIDTH } from '../components/GameNight';
import Game from '../components/Game';

import theme from '../theme';
import { gameNight, games } from '../api';

//TODO: Might need refactor to SectionList

const Home = () => {
  const navigation = useNavigation();

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
            return <GameNight key={game.id} gameNight={game} />;
          })}
        </ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All available games</Text>
          {games.map((game) => {
            return <Game key={game.id} game={game} />;
          })}
        </View>
      </ScrollView>
      <ActionButton onPress={() => navigation.navigate('AddGameNight')} />
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
