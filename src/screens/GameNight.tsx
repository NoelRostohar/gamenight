import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IconText from '../components/IconText';

import theme from '../theme';

const GameNight = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.iconContainer}>
        <IconText
          icon="calendar-today"
          size={16}
          text="12/01/21"
          color={theme.light}
        />
      </View>
      <View style={styles.iconContainer}>
        <IconText icon="timer" size={16} text="20:00h" color={theme.light} />
      </View>
      <View style={styles.iconContainer}>
        <IconText
          icon="location-pin"
          size={16}
          text="Roly's plejs"
          color={theme.light}
          subtext={'Ul. Vilima Korajca 4'}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Participants</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  iconContainer: {
    marginVertical: 10,
  },
  section: {
    paddingVertical: 20,
  },
  sectionTitle: {
    color: theme.faded,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GameNight;
