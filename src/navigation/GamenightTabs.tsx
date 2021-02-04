import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';

import Overview from '../screens/Gamenight/Overview';
import Chat from '../screens/Gamenight/Chat';
import Games from '../screens/Gamenight/Games';

import { MainStackParamList } from '.';

export type GamenightParamList = {
  Overview: undefined;
  Chat: undefined;
  Games: undefined;
};

const Tab = createMaterialTopTabNavigator<GamenightParamList>();

interface GamenightNavProps {
  route: RouteProp<MainStackParamList, 'GamenightTabs'>;
}

const GamenightNav: React.FC<GamenightNavProps> = ({ route }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { textTransform: 'none' },
      }}
    >
      <Tab.Screen name="Overview">
        {() => <Overview gamenight={route.params.gamenight} />}
      </Tab.Screen>
      <Tab.Screen name="Chat">
        {() => <Chat gamenight={route.params.gamenight} />}
      </Tab.Screen>
      <Tab.Screen name="Games">
        {() => <Games gamenight={route.params.gamenight} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default GamenightNav;
