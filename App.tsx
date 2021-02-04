import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import GetInitialData from './src/components/GetInitialData';
import Splash from './src/screens/Splash';

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

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  const [isAutheniticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <NavigationContainer theme={navTheme}>
        <GetInitialData />
        <StatusBar style="inverted" />
        <Splash />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
