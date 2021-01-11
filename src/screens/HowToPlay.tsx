import React, { useEffect } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import WebView from 'react-native-webview';

import { MainStackParamList } from '../navigation';

type HowToPlayRouteProp = RouteProp<MainStackParamList, 'HowToPlay'>;

interface HowToPlayProps {
  route: HowToPlayRouteProp;
}

const HowToPlay: React.FC<HowToPlayProps> = ({
  route: {
    params: { howToPlay, name },
  },
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: name });
  }, []);

  return <WebView source={{ uri: howToPlay }} />;
};

export default HowToPlay;
