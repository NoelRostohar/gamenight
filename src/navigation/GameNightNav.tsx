import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import GameNight from '../screens/GameNight';

type GameNightParamList = {
  Overview: undefined;
};

const Tab = createMaterialTopTabNavigator<GameNightParamList>();

const GameNightNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { textTransform: 'none' },
      }}
    >
      <Tab.Screen name="Overview" component={GameNight} />
    </Tab.Navigator>
  );
};

export default GameNightNav;
