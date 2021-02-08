import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Overview from '../screens/Gamenight/Overview';
import Chat from '../screens/Gamenight/Chat';
import Games from '../screens/Gamenight/Games';

import { MainStackParamList } from '.';
import { GlobalState } from '../store';

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
  const gamenight = useSelector((state: GlobalState) =>
    state.gamenights.gamenights.find(
      (gn) => gn.id === route.params.gamenight.id
    )
  );

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { textTransform: 'none' },
      }}
    >
      <Tab.Screen name="Overview">
        {() => <Overview gamenight={gamenight} />}
      </Tab.Screen>
      <Tab.Screen name="Chat">
        {() => <Chat gamenight={gamenight} />}
      </Tab.Screen>
      <Tab.Screen name="Games">
        {() => <Games gamenight={gamenight} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default GamenightNav;
