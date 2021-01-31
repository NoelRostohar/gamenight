import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Overview from '../screens/GameNight/Overview';
import Chat from '../screens/GameNight/Chat';

type GameNightParamList = {
  Overview: undefined;
  Chat: undefined;
};

const Tab = createMaterialTopTabNavigator<GameNightParamList>();

const GameNightNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { textTransform: 'none' },
      }}
    >
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default GameNightNav;
