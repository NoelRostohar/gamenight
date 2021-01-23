import React, { Fragment } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import Divider from '../components/Divider';

import { places } from '../api';
import theme from '../theme';

const SelectPlace = () => {
  return (
    <ScrollView style={styles.bg} contentContainerStyle={{ padding: 20 }}>
      {places.map(({ name, address }: { name: string; address: string }) => (
        <Fragment key={name}>
          <TouchableOpacity>
            <View style={styles.container}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.address}>{address}</Text>
            </View>
          </TouchableOpacity>
          <Divider />
        </Fragment>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: theme.background,
  container: {
    paddingVertical: 20,
  },
  name: {
    color: theme.light,
    fontWeight: 'bold',
    fontSize: 16,
  },
  address: {
    color: theme.faded,
    fontSize: 14,
  },
});

export default SelectPlace;
