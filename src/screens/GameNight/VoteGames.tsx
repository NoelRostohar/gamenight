import React, { useEffect } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useSelector } from 'react-redux';

import GameSelect from '../../components/GameSelect';
import Loading from '../../components/Loading';

import { GlobalState } from '../../store';

const VoteGames = () => {
  const { loading, status } = useSelector(
    (state: GlobalState) => state.gamenight
  );

  useEffect(() => {
    if (!loading && status === 'error')
      Alert.alert('Error', 'There was a problem with the server.');
  }, [loading, status]);

  return (
    <>
      {loading && status === 'fetching' && <Loading />}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <GameSelect />
      </ScrollView>
    </>
  );
};

export default VoteGames;
