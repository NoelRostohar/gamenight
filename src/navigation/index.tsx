import React from 'react';
import { Text, StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/Home';
import GameDetails from '../screens/GameDetails';
import HowToPlay from '../screens/HowToPlay';
import AddGameNight from '../screens/AddGameNight';

import theme from '../theme';
import { GameType } from '../types';

export type MainStackParamList = {
  Home: undefined;
  GameDetails: GameType;
  HowToPlay: { howToPlay: string; name: string };
  AddGameNight: undefined;
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
      <Stack.Screen
        name="AddGameNight"
        component={AddGameNight}
        options={{
          headerTitle: 'Propose a Game Night!',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialIcons name="close" size={24} color={theme.light} />
          ),
          headerRight: () => (
            <TouchableNativeFeedback
              onPress={() => {}}
              background={TouchableNativeFeedback.Ripple(theme.light, true, 15)}
              style={{ marginRight: 5 }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 5,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              >
                <MaterialIcons
                  name="check"
                  size={24}
                  color={theme.confirmation}
                />
              </View>
            </TouchableNativeFeedback>
          ),
        }}
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
