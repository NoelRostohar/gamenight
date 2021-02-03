import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Game from './Game';

import { addGame, removeGame } from '../store/Gamenight/actions';

import theme from '../theme';
import { GameType } from '../types';
import { GlobalState } from '../store';

interface GamePickProps {
  game: GameType;
  allSelected: boolean;
}

const GamePick: React.FC<GamePickProps> = ({ game, allSelected }) => {
  const dispatch = useDispatch();
  const { games } = useSelector((state: GlobalState) => state.gamenight);

  const [switchStatus, setSwitchStatus] = useState<boolean>(
    games.some((stateGame: GameType) => stateGame.id === game.id)
  );

  useEffect(() => {
    if (allSelected) setSwitchStatus(true);
  }, [allSelected]);

  useEffect(() => {
    switchStatus ? dispatch(addGame(game)) : dispatch(removeGame(game.id));
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
