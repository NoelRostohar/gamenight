import React from 'react';
import { useNavigation } from '@react-navigation/native';

import HeaderRightActionButton from './HeaderRightActionButton';

import theme from '../theme';

const GamenightJoinButton = () => {
  const navigation = useNavigation();

  return (
    <HeaderRightActionButton
      text="JOIN"
      onPress={() => navigation.navigate('VoteGames')}
      color={theme.primary}
    />
  );
};

export default GamenightJoinButton;
