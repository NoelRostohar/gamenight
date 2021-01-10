import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import theme from '../theme';

const Home = () => {
  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  text: {
    color: theme.light,
  },
});

export default Home;
