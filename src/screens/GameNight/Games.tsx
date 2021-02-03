import React, { memo } from 'react';
import { ScrollView, Text } from 'react-native';

import Game from '../../components/Game';

import { GamenightType } from 'src/types';

interface GamesProps {
  gamenight: GamenightType;
}

const Games: React.FC<GamesProps> = ({ gamenight }) => {
  return (
    <ScrollView>
      <Text></Text>
    </ScrollView>
  );
};

export default memo(Games);
