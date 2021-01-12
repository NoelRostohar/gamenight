import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import GameDetails from '../screens/GameDetails';
import HowToPlay from '../screens/HowToPlay';

import theme from '../theme';
import { GameType } from '../types';

export type MainStackParamList = {
  Home: undefined;
  GameDetails: GameType;
  HowToPlay: { howToPlay: string; name: string };
};

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.dark,
          shadowOpacity: 0,
          elevation: 0,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Text style={styles.title}>Game Nights</Text>,
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTransparent: true,
          headerTintColor: theme.light,
          headerTitleStyle: { display: 'none' },
          header: () => null,
        }}
      />
      <Stack.Screen
        name="HowToPlay"
        component={HowToPlay}
        options={{ headerBackTitle: '' }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: theme.light,
    fontWeight: 'bold',
  },
});

export default MainStack;
