import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainStack from './src/navigation';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';

import theme from './src/theme';

const navTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: theme.dark,
    text: theme.light,
    card: theme.dark,
    primary: theme.primary,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="inverted" />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
