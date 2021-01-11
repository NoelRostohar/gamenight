import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../theme';

const Divider = () => {
  return <View style={styles.root}></View>;
};

const styles = StyleSheet.create({
  root: {
    height: 1,
    width: '100%',
    backgroundColor: theme.darkAccent,
  },
});

export default Divider;
