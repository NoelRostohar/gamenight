import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Input from './Input';
import Divider from './Divider';
import GamePick from './GamePick';

import { GameType } from '../types';
import { GlobalState } from '../store';
import theme from '../theme';

const GameSelect = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const [allSelected, setAllSelected] = useState<boolean>(false);

  const { games } = useSelector((state: GlobalState) => state.games);

  useEffect(() => {
    if (allSelected) setAllSelected(false);
  }, [allSelected]);

  return (
    <>
      <View style={styles.filterRow}>
        <Input
          flexSize={2}
          onChangeText={(text: string) => setFilterValue(text)}
          value={filterValue}
          icon="search"
          placeholder="Search for games.."
        />
        <TouchableOpacity onPress={() => setAllSelected(true)}>
          <Text style={styles.filterButton}>Select All</Text>
        </TouchableOpacity>
      </View>
      {games.map((game: GameType) => {
        return (
          <View
            style={{
              display: !filterValue
                ? 'flex'
                : game.name.toLowerCase().includes(filterValue.toLowerCase())
                ? 'flex'
                : 'none',
            }}
            key={game.id}
          >
            <GamePick game={game} allSelected={allSelected} />
            <Divider />
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  filterButton: {
    color: theme.primary,
    textTransform: 'uppercase',
    fontSize: 14,
    marginLeft: 20,
  },
});

export default GameSelect;
