import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainStack from '../navigation';
import Login from './Login';

const Splash = () => {
  const [appReady, setAppReady] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const username = await AsyncStorage.getItem('@username');
        if (username) {
          setIsAuth(true);
          setAppReady(true);
        } else {
          setAppReady(true);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (!appReady) {
    return <AppLoading />;
  }

  return (
    <>{isAuth ? <MainStack /> : <Login submit={() => setIsAuth(true)} />}</>
  );
};

export default Splash;
