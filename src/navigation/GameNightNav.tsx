import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Overview from '../screens/Gamenight/Overview';
import Chat from '../screens/Gamenight/Chat';
import Games from '../screens/Gamenight/Games';

type GamenightParamList = {
  Overview: undefined;
  Chat: undefined;
  Games: undefined;
};

const Tab = createMaterialTopTabNavigator<GamenightParamList>();

const GamenightNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { textTransform: 'none' },
      }}
    >
      <Tab.Screen name="Overview" component={Overview} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Games" component={Games} />
    </Tab.Navigator>
  );
};

export default GamenightNav;
