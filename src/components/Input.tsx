import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';
import { Icon } from '../types';

interface InputProps {
  icon: Icon;
  [rest: string]: any;
  flexSize: number;
}

const Input: React.FC<InputProps> = ({ icon, flexSize, ...rest }) => {
  return (
    <View style={[styles.root, { flex: flexSize }]}>
      <MaterialIcons name={icon} size={24} color={theme.faded} />
      <TextInput
        style={styles.textInput}
        {...rest}
        placeholderTextColor={theme.faded}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 45,
    borderWidth: 1,
    borderColor: theme.faded,
    borderRadius: 25,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
    marginHorizontal: 10,
    flex: 1,
    color: theme.light,
  },
});

export default Input;
