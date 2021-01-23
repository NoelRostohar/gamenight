import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainStack from './src/navigation';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import theme from './src/theme';
import reducers from './src/store';

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

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <StatusBar style="inverted" />
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
