import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';

const ActionButton = () => {
  return (
    <TouchableOpacity style={styles.root}>
      <MaterialIcons name="add" size={24} color={theme.light} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 1000,
    backgroundColor: theme.primary,
    height: 60,
    width: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActionButton;
