import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Game from './Game';

import { addGame, removeGame } from '../store/GameNight/actions';
import {} from '../store/GameNight/types';

import theme from '../theme';
import { GameType } from '../types';

interface GamePickProps {
  game: GameType;
  allGames: boolean;
}

const GamePick: React.FC<GamePickProps> = ({ game, allGames }) => {
  const [switchStatus, setSwitchStatus] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allGames) setSwitchStatus(true);
  }, [allGames]);

  useEffect(() => {
    switchStatus ? dispatch(addGame(game)) : dispatch(removeGame(game._id));
  }, [switchStatus]);

  return (
    <View style={styles.gameRow}>
      <Game game={game} />
      <Switch
        trackColor={{ false: theme.faded, true: theme.primary }}
        ios_backgroundColor={theme.faded}
        thumbColor={theme.lightFade}
        value={switchStatus}
        onValueChange={() => setSwitchStatus((prev) => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default GamePick;
